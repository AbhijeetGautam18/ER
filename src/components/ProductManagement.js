import React, { useState } from 'react';
import Header from './Header';  // Importing Header component
import './ProductManagement.css'; // Importing styling for ProductManagement component
import Footer from './Footer';  // Importing Footer component

// Mock data for initial products
const initialProducts = [
  { id: 1, name: 'Solar Garden Lights', category: 'Garden Lights', price: 350, stockQuantity: 600, imageUrl: 'https://m.media-amazon.com/images/I/71o3gl8gTYL._AC_UF1000,1000_QL80_.jpg'},
  { id: 2, name: 'Wooden Wall Light', category: 'Wall Lights', price: 750, stockQuantity: 1000, imageUrl: 'https://woodooz.com/wp-content/uploads/2023/10/wall-light-wooden-fixture-red-lamp-shade.jpg' },
  { id: 3, name: 'Tripod Floor Lamp', category: 'Floor Lamp', price: 1200, stockQuantity: 900, imageUrl: 'https://www.ulcdn.net/images/products/338715/original/Madeleine_Floor_Lamp_Walnut_LP.JPG?1621323150' },
  { id: 4, name: 'Jute Cylindrical Lamp', category: 'Table Lamp', price: 850, stockQuantity: 1000, imageUrl: 'https://woodooz.com/wp-content/uploads/2021/04/Bed-side-table-lamp-500x500.jpg' },
  { id: 5, name: 'Multicolor Solar Garden Lights', category: 'Garden Lights', price: 800, stockQuantity: 500, imageUrl: 'https://creative.lighting/cdn/shop/files/product-image-1515633410_800x800_6a46e3ba-1ed4-465b-9f10-562a13e7f14f.jpg?v=1684494720' },
  { id: 6, name: 'Garnet Smart Bulb', category: 'Smart Bulb', price: 450, stockQuantity: 1500, imageUrl: 'https://wiproconsumerlighting.com/sites/default/files/styles/poduct_large_img/public/2_16.jpg?itok=TxZaQs7P' },
  { id: 7, name: 'Decorative Light Strip', category: 'Strip Light', price: 300, stockQuantity: 950, imageUrl: 'https://homedecorlo.com/cdn/shop/products/51YBSYyBw-L.jpg?v=1624679925' },
  { id: 8, name: 'Metal Floor Lamp', category: 'Floor Lamp', price: 1350, stockQuantity: 850, imageUrl: 'https://m.media-amazon.com/images/I/71uXjpXXgVL._AC_UF1000,1000_QL80_.jpg' },
  { id: 9, name: 'Smart LED Bulb', category: 'Smart Bulb', price: 500, stockQuantity: 1500, imageUrl: 'https://m.media-amazon.com/images/I/61aZAPK2PfL.jpg' },
  { id: 10, name: 'Emergency Light', category: 'Emergency Light', price: 400, stockQuantity: 1300, imageUrl: 'https://www.nathosp.com/images/uploads/emergency_lights_bbem6_lrg.jpg' }
];

// Defining ProductManagement component
const ProductManagement = () => {
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: '',
    imageUrl: ''
  });

  // State variable for editing product
  const [editingId, setEditingId] = useState(null);
  // State variable for showing/hiding add product form
  const [showAddForm, setShowAddForm] = useState(false);

  // Event handler for form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Checking if all fields are filled
    if (!formData.name || !formData.category || !formData.price || !formData.stockQuantity || !formData.imageUrl) {
      alert('Please fill out all fields');
      return;
    }

    // Updating existing product
    if (editingId) {
      const updatedProducts = products.map(product => {
        if (product.id === editingId) {
          return { ...product, ...formData };
        }
        return product;
      });
      setProducts(updatedProducts);
      setEditingId(null);
    } else {
      // Adding new product
      const newProduct = {
        id: Date.now(),
        ...formData
      };
      setProducts([...products, newProduct]);
    }
    setFormData({
      name: '',
      category: '',
      price: '',
      stockQuantity: '',
      imageUrl: ''
    });
    setShowAddForm(false); // Hide the form after submission
  };

  const handleEdit = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setFormData({ ...productToEdit });
    setEditingId(id);
    setShowAddForm(true); // Show the form when editing a product
  };

  // Event handler for deleting a product
  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Header />
      <div className="product-management-container">
        <div className="product-listings">
          <h2>Product Listings</h2>
          <div className="product-tiles">
            {products.map(product => (
              <div key={product.id} className="product-tile">
                <img src={product.imageUrl} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ₹{product.price}</p>
                  <p>Stock Quantity: {product.stockQuantity}</p>
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="add-update-product-form">
          {showAddForm && (
            <form onSubmit={handleSubmit} className="add-product-form">
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                Category:
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
              </label>
              <label>
                Price:
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
              </label>
              <label>
                Stock Quantity:
                <input type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} />
              </label>
              <label>
                Upload Image:
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </label>
              <div>
                <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>
                <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
              </div>
            </form>
          )}
          {!showAddForm && (
            <button className='form_button' onClick={() => setShowAddForm(true)}>Add/Update Product</button>
          )}
        </div>
      <Footer />
    </div>
  );
};

export default ProductManagement;