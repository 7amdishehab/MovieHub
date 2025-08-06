function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );
}

export default SectionTitle;
