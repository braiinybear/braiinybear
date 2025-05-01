import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-[var(--primary-main)] text-white py-2 px-4 sm:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - contact info */}
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
            <Mail size={16} />
            <span className="text-xs sm:text-sm font-medium">support@braiinybear.org</span>
          </div>
          
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200 mt-1 sm:mt-0">
            <Phone size={16} />
            <span className="text-xs sm:text-sm font-medium">+91-9520770813</span>
          </div>
        </div>
        
        {/* Right side - navigation links */}
        <div className="flex flex-col items-end sm:flex-row sm:space-x-4">
          <Link to="/faq" className="text-xs sm:text-sm hover:text-blue-200 transition-colors duration-200">FAQ</Link>
          <Link to="/contact" className="text-xs sm:text-sm hover:text-blue-200 transition-colors duration-200 mt-1 sm:mt-0">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;