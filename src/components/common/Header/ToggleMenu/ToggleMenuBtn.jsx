import { FiMenu } from "react-icons/fi";

function ToggleMenuBtn({ setOpen }) {
  return (
    <button
      className="md:hidden flex items-center text-2xl text-blue-600 dark:text-blue-400 focus:outline-none"
      onClick={() => setOpen(true)}
      aria-label="Open menu"
    >
      <FiMenu />
    </button>
  );
}

export default ToggleMenuBtn;
