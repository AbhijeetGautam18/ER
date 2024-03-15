import React, { useState } from 'react';
import Header from './Header';  // Importing Header component
import './OrdersManagement.css';  // Importing CSS styles specific to OrdersManagement component
import Footer from './Footer';  // Importing Footer component

// Mock data for initial orders
const initialOrders = [
  { id: 1, orderId: 'ORD001', customerName: 'Riya Singh', product: 'Strip Light', orderDate: '2024-03-14', status: 'Pending' },
  { id: 2, orderId: 'ORD002', customerName: 'Kishan Raj', product: 'Table Lamp', orderDate: '2024-03-09', status: 'Shipped' },
  { id: 3, orderId: 'ORD003', customerName: 'Amit Sharma', product: 'Smart Bulb', orderDate: '2024-03-10', status: 'Delivered' },
  { id: 4, orderId: 'ORD004', customerName: 'Rohit Sharma', product: 'Wall Light', orderDate: '2024-03-01', status: 'Shipped' },
  { id: 5, orderId: 'ORD005', customerName: 'Smriti Mishra', product: 'Emergency Light', orderDate: '2024-02-28', status: 'Delivered' },
  { id: 6, orderId: 'ORD006', customerName: 'Vijay Chauhan', product: 'Garden Light', orderDate: '2024-03-13', status: 'Pending' },
  { id: 7, orderId: 'ORD007', customerName: 'Ajit Singh', product: 'Strip Light', orderDate: '2024-03-10', status: 'Pending' },
  { id: 8, orderId: 'ORD008', customerName: 'Naman Kumar', product: 'Smart Bulb', orderDate: '2024-03-08', status: 'Delivered' },
  { id: 9, orderId: 'ORD009', customerName: 'Rishi Dev', product: 'Floor Lamp', orderDate: '2024-03-12', status: 'Shipped' }
];

const OrdersManagement = () => {
  // State variables for managing orders and selected order
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Manage new status individually for each order
  const [newStatusMap, setNewStatusMap] = useState({});

  const handleViewDetails = (order) => {
    setSelectedOrder(order);  // Function to view details of a specific order
  };

   // Function to update status of a specific order
  const handleUpdateStatus = (orderId) => {
    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatusMap[orderId] };
      }
      return order;
    });
    setOrders(updatedOrders);
    // Clear the new status for the current order
    setNewStatusMap({ ...newStatusMap, [orderId]: '' });
  };

  // Function to delete a specific order
  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

  // Function to handle status change for a specific order
  const handleStatusChange = (orderId, status) => {
    setNewStatusMap({ ...newStatusMap, [orderId]: status });
  };

  return (
    <div>
      <Header />
      <div className="orders-management-container">
        <h2>Orders Management</h2>
        <div className="orders-list">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Product Ordered</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping through orders and rendering each order */}
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.orderId}</td>
                  <td>{order.customerName}</td>
                  <td>{order.product}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.status}</td>
                  <td>
                    <button onClick={() => handleViewDetails(order)}>View Details</button>
                    <select value={newStatusMap[order.orderId] || ''} onChange={(e) => handleStatusChange(order.orderId, e.target.value)}>
                      <option value="">Select Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                    <button onClick={() => handleUpdateStatus(order.orderId)}>Update Status</button>
                    <button onClick={() => handleDeleteOrder(order.orderId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedOrder && (
        <div className="order-details-modal">
          <div className="order-details-content">
            <h3>Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
            <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
            <p><strong>Product Ordered:</strong> {selectedOrder.product}</p>
            <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            </div>
            <div className="product-image">
              <span className="close" onClick={() => setSelectedOrder(null)}>&times;</span>
              {/* Rendering image based on the product */}
              {selectedOrder.product === 'Strip Light' && <img src="https://haroldelectricals.com/cdn/shop/products/led-strip-light-product-image-2.jpg?v=1647136578" alt="Strip Light" />}
              {selectedOrder.product === 'Floor Lamp' && <img src="https://www.ulcdn.net/images/products/338758/product/Yarine_Floor_Lamp_Walnut_LP.JPG?1621322451" alt="Floor Lamp" />}
              {selectedOrder.product === 'Table Lamp' && <img src="https://www.jiomart.com/images/product/original/rvzvcc0kuk/lightangle-table-lamps-for-bedroom-home-decoration-night-lamp-bedside-lamps-for-living-room-beige-product-images-orvzvcc0kuk-p601322443-0-202305100829.jpg?im=Resize=(1000,1000)" alt="Table Lamp" />}
              {selectedOrder.product === 'Wall Light' && <img src="https://woodooz.com/wp-content/uploads/2023/06/wall-light-offwhite-cylindrical-metal-fixture-500x500.jpg" alt="Wall Light" />}
              {selectedOrder.product === 'Emergency Light' && <img src="https://images.meesho.com/images/products/102388854/3a9wy_256.webp" alt="Emergency Light" />}
              {selectedOrder.product === 'Garden Light' && <img src="https://creative.lighting/cdn/shop/files/product-image-1515633410_800x800_6a46e3ba-1ed4-465b-9f10-562a13e7f14f.jpg?v=1684494720" alt="Garden Light" />}
              {selectedOrder.product === 'Smart Bulb' && <img src="https://m.media-amazon.com/images/I/61aZAPK2PfL.jpg" alt="Smart Bulb" />}
            </div>
          </div>
      )}
      <Footer />
    </div>
  );
};

export default OrdersManagement;
