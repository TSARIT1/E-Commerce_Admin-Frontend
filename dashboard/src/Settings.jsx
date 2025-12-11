import React from "react";
import "./Settings.css";

function Settings() {

  const handleSaveProfile = () => {
    alert("Profile Updated Successfully!");
  };

  
  const handleStoreUpdate = () => {
    alert("Store Settings Updated!");
  };

  const handleNotificationSave = () => {
    const ok = window.confirm("Are you sure you want to save notification settings?");
    if (ok) {
      alert("Notifications Saved!");
    }
  };

  
  const handlePasswordUpdate = () => {
    alert("Password Updated Successfully!");
  };

  return (
    <div className="settings-page">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

      <h1 className="set-title">Settings</h1>
      <p className="set-sub">Manage your account, store & system settings</p>

      <div className="set-container">

       
        <div className="set-box">
          <h2>Profile Settings</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone</label>
          <input type="text" placeholder="Enter phone number" />

      
          <button className="save-btn" onClick={handleSaveProfile}>
            Save Changes
          </button>
        </div>

        <div className="set-box">
          <h2>Store Settings</h2>

          <label>Store Name</label>
          <input type="text" placeholder="Enter store name" />

          <label>Store Address</label>
          <textarea rows="3" placeholder="Enter store address"></textarea>

          <label>Currency</label>
          <select>
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>

         
          <button className="save-btn" onClick={handleStoreUpdate}>
            Update Store
          </button>
        </div>

       
        <div className="set-box">
          <h2>Notification Settings</h2>

          <div className="toggle-row">
            <span>Order Updates</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Customer Messages</span>
            <input type="checkbox" />
          </div>

          <div className="toggle-row">
            <span>Low Stock Alert</span>
            <input type="checkbox" defaultChecked />
          </div>

      
          <button className="save-btn" onClick={handleNotificationSave}>
            Save Notifications
          </button>
        </div>

       
        <div className="set-box">
          <h2>Security</h2>

          <label>Old Password</label>
          <input type="password" placeholder="Enter old password" />

          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm new password" />

          
          <button className="save-btn" onClick={handlePasswordUpdate}>
            Update Password
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;
