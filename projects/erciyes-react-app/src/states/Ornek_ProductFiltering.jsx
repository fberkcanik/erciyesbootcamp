import React, { useState } from "react";
import { products } from "../data/products";

function Ornek_ProductFiltering() {
  const [tableData, setTableData] = useState(products);

  const showCriticalStocks = () => {
    const criticalStocks = products.filter((urun) => urun.unitsInStock < 5);
    setTableData(criticalStocks);
  };
  const showAll = () => {
    setTableData(products);
  };
  const showCheapProducts = () => {
    const cheapProducts = products.filter((urun) => urun.unitPrice < 20);
    setTableData(cheapProducts);
  };
  const showExpensiveProducts = () => {
    const expensiveProducts = products.filter((urun) => urun.unitPrice > 50);
    setTableData(expensiveProducts);
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="buttons">
          <button onClick={showCriticalStocks}>Show Critical Stock</button>
          <button onClick={showAll}>Show All</button>
          <button onClick={showCheapProducts}>Show Cheap Products</button>
          <button onClick={showExpensiveProducts}>
            Show Expensive Products
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((urun, index) => (
              <tr key={index}>
                <td>{urun.name}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ornek_ProductFiltering;
