"use client";

import ProductCard from "@/components/Card/ProductCard";
import { Pagination } from "@nextui-org/pagination";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const CustomerProductComponent = ({ products, q }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 12;
  const product = q == "All" ? products : products.filter((p)=>p?.category?.categoryName == q); 
  const pages = Math.ceil(product.length == 0 ? products?.length / rowsPerPage : product?.length / rowsPerPage);
  const productData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return product.slice(start, end);
  }, [page, product]);


  return (
    <div>
      <div id="product" className="scroll-mt-10">
        <ProductCard
          searchParams={q}
          products={productData}
          isPromotion={false}
        />
      </div>
      {product.length > 12 && 
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
    </div>
  );
};

export default CustomerProductComponent;
