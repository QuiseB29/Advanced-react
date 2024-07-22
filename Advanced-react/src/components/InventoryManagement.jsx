
import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';

const InventoryManagement = () => {
  const { products, addProduct, removeProduct } = useInventory();
  const [newProductName, setNewProductName] = useState('');
  const [newProductQuantity, setNewProductQuantity] = useState(0);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      quantity: newProductQuantity,
    };
    addProduct(newProduct);
    setNewProductName('');
    setNewProductQuantity(0);
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Product</h3>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={newProductQuantity}
          onChange={(e) => setNewProductQuantity(Number(e.target.value))}
          placeholder="Quantity"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default InventoryManagement;
