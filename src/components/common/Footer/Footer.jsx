import { FaHeart } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-gray-700 dark:text-gray-300">
              Made with love by{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Team 2
              </span>
            </span>
            <FaHeart className="text-blue-500 text-xl" />
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span>&copy; {currentYear} MovieHub, All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
