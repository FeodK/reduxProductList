import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";

const EditProductForm = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [updatedProduct, setUpdatedProduct] = useState(product);
  
    useEffect(() => {
      setUpdatedProduct(product);
    }, [product]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUpdatedProduct(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateProduct({ id: updatedProduct.id, updatedData: updatedProduct }));
      onClose();
    };
  
    return (
      <div className="edit-product-form">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
            placeholder="Product Description"
            required
          />
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };
  

export default EditProductForm;
