"use client";
import WorkTool from "@/src/app/_components/modules/workTool";
import React, { memo, useEffect, useState } from "react";

const page = memo(({ params }) => {
  const productId = params.id;
  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(`/api/product/cms/${productId}/getProduct`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-full">
      <WorkTool
        initialValues={JSON.parse(JSON.stringify(product))}
        apiPath={`cms/${_id}/editProduct`}
      />
    </div>
  );
});

export default page;
