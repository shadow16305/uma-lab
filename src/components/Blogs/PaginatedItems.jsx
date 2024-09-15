import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import { blogPageItems } from "../../constants/content";
import BlogCard from "../UI/BlogCard";
import arrow from "../../assets/arrow-point-to-right.png";

const items = blogPageItems;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <BlogCard key={item.id} id={item.id} date={item.date} img={item.img} text={item.text} />
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  itemsPerPage = Math.max(1, Math.floor(itemsPerPage));
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex flex-wrap justify-center gap-7 max-w-[1200px]">
          <Items currentItems={currentItems} />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img src={arrow} alt="next" width={20} height={20} className="invert" />}
          previousLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center justify-center gap-10 text-white"
          pageLinkClassName="text-[20px]"
          activeLinkClassName="border-b-2 border-white"
        />
      </div>
    </>
  );
}
