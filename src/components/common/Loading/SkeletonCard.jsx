import React from "react";

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse relative">
      <div className="w-full h-80 bg-gray-300 dark:bg-gray-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-skeleton-shimmer" />
      </div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-skeleton-shimmer" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-skeleton-shimmer" />
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-skeleton-shimmer" />
          </div>
        </div>
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-20 mt-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-skeleton-shimmer" />
        </div>
      </div>
      <style>{`
        @keyframes skeleton-shimmer {
          0% {
            background-position: -400px 0;
          }
          100% {
            background-position: 400px 0;
          }
        }
        .animate-skeleton-shimmer {
          background-size: 800px 100%;
          animation: skeleton-shimmer 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default SkeletonCard;
