import React from "react";
import "./CancelOrder.css";

export default function CancelOrder() {
  let orders = [
    { id: 101, customer: "Amit Sharma", item: "Smartphone", price: 12999, status: "Processing" },
    { id: 102, customer: "Priya Verma", item: "Shoes", price: 2499, status: "Shipped" },
    { id: 103, customer: "Rahul Singh", item: "Watch", price: 3499, status: "Pending" },
    { id: 104, customer: "Neha Gupta", item: "Headphones", price: 1999, status: "Processing" },
  ];

  const cancelOrder = (id) => {
    alert("Order " + id + " has been cancelled!");
  };

  return (
    <div className="cancel-order">

      
      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>

      <h1 className="co-title">Cancel Orders</h1>
      <p className="co-sub">Manage refund requests and cancel customer orders</p>

      <div className="co-table-box">
        <table className="co-table">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Price</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.item}</td>
                <td>₹{o.price}</td>
                <td>
                  <span className={`status ${o.status.toLowerCase()}`}>
                    {o.status}
                  </span>
                </td>
                <td>
                  <button className="co-btn" onClick={() => cancelOrder(o.id)}>
                    Cancel Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
