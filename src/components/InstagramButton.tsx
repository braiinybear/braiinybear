import instasvg from "../assets/svgs/instagram-2-1-logo-svgrepo-com.svg"
const InstagramButton = () => {
  
    return (
       <a
      href="https://www.instagram.com/braiinybearorg/?utm_source=ig_web_button_share_sheet"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-25 z-50"
    >
      <img
        src={instasvg}
        alt="View Instagram"
        className="w-11 h-11 drop-shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
    );
  };
  
  export default InstagramButton;
  