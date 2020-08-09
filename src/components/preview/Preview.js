import React from "react";
import "./preview.scss";
import ProductDetails from "../productDetails/ProductDetails";

const Preview = ({ title, items }) => (
  <div className="product-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ProductDetails key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default Preview;
