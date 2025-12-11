import React from "react";
import "./ViewOrder.css";

function Orders() {
  const orders = [
    {
      id: "ORD001",
      customer: "Rahul Sharma",
      product: "Smartphone A12",
      amount: "₹12,499",
      status: "Delivered",
      date: "02 Dec 2025",
    },
    {
      id: "ORD002",
      customer: "Priya Verma",
      product: "Wireless Earbuds",
      amount: "₹1,799",
      status: "Pending",
      date: "03 Dec 2025",
    },
    {
      id: "ORD003",
      customer: "Arjun Singh",
      product: "Sports Shoes",
      amount: "₹2,099",
      status: "Shipped",
      date: "03 Dec 2025",
    },
    {
      id: "ORD004",
      customer: "Neha Patel",
      product: "Laptop Bag",
      amount: "₹899",
      status: "Cancelled",
      date: "04 Dec 2025",
    },
  ];

  return (
    <div className="orders-container">

      <div className="co-close" onClick={() => window.location.href = "/"}>
        ✖
      </div>
      
      <h1 className="orders-title">View Orders</h1>
      <p className="orders-sub">Check order status & customer details</p>

      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td>{o.amount}</td>
              <td>
                <span className={`status ${o.status.toLowerCase()}`}>
                  {o.status}
                </span>
              </td>
              <td>{o.date}</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
