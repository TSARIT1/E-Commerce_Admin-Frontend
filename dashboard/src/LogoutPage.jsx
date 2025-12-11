import React from "react";
import "./Logout.css";

function LogoutPage() {

  const handleLogout = () => {
    alert("You have been logged out!");
    window.location.href = "/login";  
  };

  return (
    <div className="logout-container">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

      <div className="logout-box">
        <h1>Logout</h1>
        <p>Are you sure you want to logout from your account?</p>

        <button className="logout-btn" onClick={handleLogout}>
          Yes, Logout
        </button>

        <a className="cancel-link" href="/">
          Cancel
        </a>
      </div>

    </div>
  );
}

export default LogoutPage;
