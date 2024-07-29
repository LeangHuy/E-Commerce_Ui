"use client";

import ProductCard from "@/components/Card/ProductCard";
import { Pagination } from "@nextui-org/pagination";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const CustomerProductComponent = ({ products, q }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 12;
  const pages = Math.ceil(products?.length / rowsPerPage);
  const productData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return products.slice(start, end);
  }, [page, products]);
  return (
    <div>
      <div id="product" className="scroll-mt-10">
        <ProductCard
          searchParams={q}
          products={productData?.filter((p) => p)}
          isPromotion={false}
        />
      </div>
      {pages != 1 &&
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showShadow
            color="secondary "
            classNames={{
              item: "bg-sky-400 rounded-md text-white font-medium m-1",
            }}
            className="bg-none"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      {/* <div className="flex w-full justify-center mb-3">
        <Pagination
          isCompact
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div> */}
    </div>
  );
};

export default CustomerProductComponent;
