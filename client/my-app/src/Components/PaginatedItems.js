import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProductTable from './ProductTable';

export default function PaginatedItems({itemsPerPage,items,setfoodList}) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
      activeClassName={'item active '}
      breakClassName={'item break-me '}
      containerClassName={'pagination'}
      disabledClassName={'disabled-page'}
      nextClassName={"item next "}
      className='pagination'
      marginPagesDisplayed={5}
      breakLabel={'...'}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName={'item pagination-page '}
        previousLabel="< previous"
        previousClassName={"item previous"}
        renderOnZeroPageCount={null}
      />
      <ProductTable foodList={currentItems} setFoodList={setfoodList}/>
    </>
  );
}