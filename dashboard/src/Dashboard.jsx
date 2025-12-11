import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-layout">

     
      <div className="dash-sidebar">
        
         
        <button className="side-btn active">Dashboard</button>
        <a href="addproduct"><button className="side-btn">Add Products</button></a>
        <a href="productsitem"><button className="side-btn">Products Items</button></a>
        <a href="update"><button className="side-btn">Update Products</button></a>

        <button className="side-btn order-btn"><a href="Vieworder" style={{ textDecoration: "none", color: "inherit" }}>
          Orders <span className="order-badge">5</span></a>
        </button>
      </div>

      
      
      <div className="dash-container">
        <h1 className="dash-title">E-Commerce Dashboard</h1>
        <p className="dash-sub">Manage Products, Orders & Revenue</p>

        
        
        <div className="dash-cards">

          <div className="dash-card red"><a href="productsitem" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>12</h2>
            <p>Total Products</p></a>
          </div>

          <div className="dash-card green"><a href="Vieworder" style={{ textDecoration: "none", color: "inherit" }}>
            <h2>27</h2>
            <p>Total Orders</p></a>
          </div>

          <div className="dash-card yellow">
            <h2>3</h2>
            <p>Pending Orders</p>
          </div>

          <div className="dash-card blue">
            <h2>₹4,560</h2>
            <p>Today's Revenue</p>
          </div>

        </div>

        
        <div className="dash-row">

          <div className="dash-box">
            <h3>Quick Actions</h3>
            <a href="addproduct"><button className="dash-btn"><i className="fa-solid fa-plus"></i>Add Product</button></a>
            <button className="dash-btn"> <a href="Vieworder" style={{ textDecoration: "none", color: "inherit" }}><i classNmae="fa-solid fa-box"></i> View Orders</a></button>
            <button className="dash-btn"> Notification Test</button>
          </div>

          <div className="dash-box">
            <h3>System Status</h3>
            <p><strong>API:</strong> Connected</p>
            <p><strong>Notifications:</strong> Enabled</p>
            <p><strong>Auto Refresh:</strong> Active (10s)</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
