import React from "react";
import'./Update.css'

function Update() {
  function updateProduct() {
    const popup = document.getElementById("popup-box");
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }

  return (
    <>
      
      <div className="update-page">

        <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

        <h2 className="update-title">Update Product</h2>

        <div className="form-group">
          <label>Product Name</label>
          <div className="input-wrap">
            <i className="fa-solid fa-tag"></i>
            <input type="text" placeholder="Enter product name" />
          </div>
        </div>

        <div className="form-group">
          <label>Price</label>
          <div className="input-wrap">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <input type="number" placeholder="Enter price" />
          </div>
        </div>

        <div className="form-group">
          <label>Category</label>
          <div className="input-wrap">
            <i className="fa-solid fa-layer-group"></i>
            <select>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Grocery</option>
              <option>Home & Appliances</option>
              <option>Decoration</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Stock</label>
          <div className="input-wrap">
            <i className="fa-solid fa-box"></i>
            <input type="number" placeholder="Available stock" />
          </div>
        </div>

        <div className="form-group">
          <label>Product Image</label>
          <div className="input-wrap">
            <i className="fa-solid fa-image"></i>
            <input type="file" />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Write product description"></textarea>
        </div>

        <button className="update-btn" onClick={updateProduct}>
          Update Product
        </button>

      </div>

      
      <div className="popup" id="popup-box">
        <i className="fa-solid fa-circle-check"></i>
        <h3>Product Updated Successfully!</h3>
      </div>
    </>
  );
}

export default Update;
