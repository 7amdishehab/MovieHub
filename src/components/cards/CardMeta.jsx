import { FaStar } from "react-icons/fa";

function CardMeta({ rating, year }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 py-1 px-2 rounded-full">
        <FaStar className="mr-1 text-amber-500 text-xs" />
        <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
          {rating ? rating.toFixed(1) : "N/A"}
        </span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {year || "N/A"}
      </p>
    </div>
  );
}

export default CardMeta;
