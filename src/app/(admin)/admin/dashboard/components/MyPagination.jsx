"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { useMemo } from "react";

function MyPagination({ products }) {
  //pagination
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const rowsPerPage = 12;
  const pages = Math.ceil(products?.length / rowsPerPage);
  const product = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return products?.slice(start, end);
  }, [page, products]);
  const searchProduct = product?.filter((item) => {
    return item.productName
      .toLocaleLowerCase()
      .includes(value.toLocaleLowerCase().trim());
  });
  console.log("page ", page);
  return (
    <div className={` ${searchProduct?.length === 0 ? "hidden" : ""}`}>
      <Pagination
        classNames={{
          item: " bg-sky-300 text-white font-medium rounded-md",
        }}
        className=" mt-4 max-sm:mt-[15rem]"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}

export default MyPagination;
