

import React from "react";
import './ProductPage.css'

export default function ProductPage() {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  
  function deleteProduct(index) {
    let newData = products.filter((item, i) => i !== index);
    localStorage.setItem("products", JSON.stringify(newData));
    window.location.reload(); 
  }

  
  function editProduct(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "/update"; 
  }

  return (
    <div className="product-page">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>
      
      <h2 className="product-title">All Products</h2>

      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            
            <img src={item.img} alt="" className="product-img" />
            
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

           
            <div className="btn-group">
              <button className="edit-btn" onClick={() => editProduct(i)}>
                Edit
              </button>

              <button className="delete-btn" onClick={() => deleteProduct(i)}>
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
