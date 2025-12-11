import React from "react";
import "./Customer.css";

export default function Customer() {
  let customers = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com", phone: "9876543210", orders: 12 },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com", phone: "9988776655", orders: 7 },
    { id: 3, name: "Rahul Singh", email: "rahul@gmail.com", phone: "9090909090", orders: 4 },
    { id: 4, name: "Neha Gupta", email: "neha@gmail.com", phone: "8811223344", orders: 9 },
  ];

  return (
    <div className="customer">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

      <h1 className="cust-title">Customer List</h1>
      <p className="cust-sub">All registered customers of your e-commerce store</p>

      
      
      <div className="cust-search">
        <input type="text" placeholder="Search customer..." />
        <button>Search</button>
      </div>


      <div className="cust-table-box">
        <table className="cust-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total Orders</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
