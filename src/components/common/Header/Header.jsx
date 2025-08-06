import Navbar from "./Navbar/Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky -top-1 sm:top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
