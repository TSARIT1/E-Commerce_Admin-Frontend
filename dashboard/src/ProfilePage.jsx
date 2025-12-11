import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-container">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

      <h1 className="profile-title">Admin Profile</h1>
      <p className="profile-sub">Manage your account details & settings</p>

      <div className="profile-card">

       
        <div className="profile-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            className="profile-img"
          />

          <h2 className="profile-name">Admin</h2>
          <p className="profile-role">E-Commerce Administrator</p>

          <button
            className="edit-profile-btn"
            onClick={() => {
              document.querySelectorAll(".info-input").forEach((i) =>
                i.removeAttribute("disabled")
              );
              document.getElementById("saveBtn").style.display = "block";
            }}
          >
            Edit Profile
          </button>
        </div>

       
        <div className="profile-right">
          <h3 className="info-title">Personal Information</h3>

          <div className="info-row">
            <span>Email:</span>
            <input className="info-input" disabled defaultValue="official@gmail.com" />
          </div>

          <div className="info-row">
            <span>Phone:</span>
            <input className="info-input" disabled defaultValue="+91 9876543210" />
          </div>

          <div className="info-row">
            <span>Address:</span>
            <input className="info-input" disabled defaultValue="Mumbai, Maharashtra" />
          </div>

          <div className="info-row">
            <span>Member Since:</span>
            <input className="info-input" disabled defaultValue="June 2000" />
          </div>

          <div className="info-row">
            <span>GST:</span>
            <input className="info-input" disabled defaultValue="18%" />
          </div>

          <button
            id="saveBtn"
            className="save-profile-btn"
            style={{ display: "none" }}
            onClick={() => {
              document.querySelectorAll(".info-input").forEach((i) =>
                i.setAttribute("disabled", true)
              );
              document.getElementById("saveBtn").style.display = "none";
              alert("Profile Updated Successfully!");
            }}
          >
            Save Changes
          </button>

          <hr />

          <h3 className="info-title">Dashboard Stats</h3>

          <div className="stats-grid">
            <div className="stat-box">
              <h2>12</h2>
              <p>Total Products</p>
            </div>

            <div className="stat-box">
              <h2>27</h2>
              <p>Total Orders</p>
            </div>

            <div className="stat-box">
              <h2>4</h2>
              <p>Pending Orders</p>
            </div>

            <div className="stat-box">
              <h2>₹4,560</h2>
              <p>Today’s Sales</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
