import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

const ContactOnPage = () => {
  return (
    <div>
      {/* Fixed Contact Icons */}
      <div className="fixed z-50 flex flex-col space-y-4 bottom-6 right-6">
        {/* Phone Icon */}
        <a href="tel:+1234567890" className="relative group" aria-label="Call us">
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 animate-ping"></div>
          <div className="relative flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600">
            <IoPhonePortraitOutline size={24} />
          </div>
        </a>

        {/* Facebook Icon */}
        <a
          href="https://facebook.com/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Visit our Facebook page"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-75 animate-ping"></div>
          <div className="relative flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
            <FaFacebookMessenger size={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactOnPage;
