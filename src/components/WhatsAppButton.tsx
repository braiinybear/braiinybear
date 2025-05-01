// src/components/WhatsAppButton.tsx
const WhatsAppButton = () => {
    const phoneNumber = "9520770813"; // Replace with your number
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="Chat on WhatsApp"
          className="w-16 h-16 drop-shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    );
  };
  
  export default WhatsAppButton;
  