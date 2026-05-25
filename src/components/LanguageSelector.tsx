import { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

// Support languages of India + English
const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
  { code: "ur", name: "اردو (Urdu)" },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

// Cookie Helper Functions
const setCookie = (name: string, value: string, days?: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    // 1. Resolve current active language from cookie on mount
    const transCookie = getCookie("googtrans");
    if (transCookie) {
      const parts = transCookie.split("/");
      const currentCode = parts[parts.length - 1];
      if (currentCode) {
        setSelectedLanguage(currentCode);
      }
    }

    // 2. Load Google Translate script dynamically
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,pa,mr,gu,ta,te,kn,ml,or,ur",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  const changeLanguage = (code: string) => {
    setSelectedLanguage(code);

    // Set cookie path=/ to persist language selection across all pages
    const cookieValue = code === "en" ? "" : `/en/${code}`;
    setCookie("googtrans", cookieValue);

    // Dynamic trigger: Update Google Translate's select combobox directly for instant on-the-fly transition without page reload
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = code;
      googleSelect.dispatchEvent(new Event("change"));
    } else {
      // Fallback: Reload the page if the widget is not fully rendered yet
      window.location.reload();
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Hidden Google Translate standard widget required in the DOM */}
      <div id="google_translate_element" className="hidden" style={{ display: "none" }}></div>

      {/* Styled custom dropdown container */}
      <div className="flex items-center gap-1 bg-white border border-gray-200 dark:border-gray-800 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300">
        <Globe className="h-4 w-4 text-blue-500 flex-shrink-0 animate-pulse" />
        <select
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="notranslate appearance-none bg-transparent pr-6 pl-1 py-0.5 text-sm font-medium text-gray-700 outline-none border-none cursor-pointer w-full focus:ring-0"
          translate="no"
        >
          {languages.map((lng) => (
            <option key={lng.code} value={lng.code} className="notranslate text-black bg-white" translate="no">
              {lng.name}
            </option>
          ))}
        </select>
        <ChevronDown className="h-3 w-3 text-gray-400 absolute right-3 pointer-events-none" />
      </div>
    </div>
  );
}
