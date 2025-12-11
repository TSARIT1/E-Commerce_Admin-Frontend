import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="top-nav">

      
      <h2 className="logo">Admin Panel</h2>

      
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="profilepage">Profile</a></li>
        <li><a href="customer">Customers</a></li>
        <li><a href="cancelorder">Cancel Order</a></li>
        <li><a href="addproduct"> Add New Menu</a></li>
        <li><a href="Vieworder">View Orders</a></li>
        
        <li><a href="settings">Settings</a></li>
        <li><a href="logout">Logout</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
