import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PRODUCT_GET } from "../../api/api";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

const Product = () => {
  const { id } = useParams();
  const { data, request, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchProduct() {
      const { url, options } = PRODUCT_GET(id);
      await request(url, options);
    }

    fetchProduct();
  }, [id, request]);

  if (data) {
    return (
      <article className="product">
        <Breadcrumb product={data} />
      </article>
    );
  }
};

export default Product;
