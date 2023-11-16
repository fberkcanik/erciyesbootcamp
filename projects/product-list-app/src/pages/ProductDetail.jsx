import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { suppliers } from "../data/suppliers";

function ProductDetail() {
  const { id } = useParams();
  var product = products.find(item => item.id == id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          textAlign: "center",
          border: "1px solid",
          borderRadius: "7px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <h1>{product.name}</h1>
        <p>Units in Stock: {product.unitsInStock}</p>
        <p>Unit Price: {product.unitPrice}</p>
        <p>Quantity per Unit: {product.quantityPerUnit}</p>
        <p>Category: { categories.find(productCategory => productCategory.id == product.categoryId ).name }</p>
        <p>Supplier: { suppliers.find(productSupplier => productSupplier.id == product.supplierId).companyName}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
