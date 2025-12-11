import React from "react";
import { useNavigate } from "react-router-dom";
import './Addproduct.css'

export default function Addproduct() {
  const nav = useNavigate();

  function saveProduct(e) {
    e.preventDefault();

    let name = document.getElementById("pname").value;
    let price = document.getElementById("pprice").value;
    let file = document.getElementById("pimg").files[0];

    if (!file) {
      alert("Please choose an image!");
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      let base64 = reader.result;

      let oldData = JSON.parse(localStorage.getItem("products")) || [];

      oldData.push({
        name: name,
        price: price,
        img: base64,
      });

      localStorage.setItem("products", JSON.stringify(oldData));

      nav("/productsitem");
    };
  }

  return (
    <div className="add-container">

      
      <div 
        className="close-btn" 
        onClick={() => nav("/")}
      >
        ✖
      </div>

      <h2 className="title">Add New Product</h2>

      <form onSubmit={saveProduct} className="form-box">
        <label>Product Name</label>
        <input id="pname" type="text" placeholder="Enter product name" />

        <label>Product Price</label>
        <input id="pprice" type="text" placeholder="Enter price" />

        <label>Product Image</label>
        <input id="pimg" type="file" accept="image/*" />

        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
  );
}
