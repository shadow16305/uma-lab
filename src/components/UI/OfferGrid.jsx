import React from "react";

function OfferGrid({ children }) {
  return (
    <div className="flex flex-col gap-y-14 text-white text-xl lg:w-1/2 ">
      {children}
    </div>
  );
}

export default OfferGrid;
