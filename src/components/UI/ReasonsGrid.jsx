function ReasonsGrid({ children }) {
  return (
    <div className="bg-[#1a1a1a] md:grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-32 text-white text-xl pb-32 mx-auto w-11/12 hidden">
      {children}
    </div>
  );
}

export default ReasonsGrid;
