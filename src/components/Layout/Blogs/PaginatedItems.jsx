import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import { blogPageItems } from "../../Tools/item-database";
import BlogCard from "../../UI/BlogCard";
import arrow from "../../../assets/Arrow 1.svg";

// Example items, to simulate fetching from other resources.
const items = blogPageItems;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <BlogCard
            key={item.id}
            date={item.date}
            img={item.img}
            text={item.text}
          />
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from other resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  itemsPerPage = Math.max(1, Math.floor(itemsPerPage));
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when the user clicks to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
          nextLabel={<img src={arrow} />}
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
