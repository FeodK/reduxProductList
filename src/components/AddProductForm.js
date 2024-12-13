import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    available: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.description && product.price) {
      dispatch(addProduct({ ...product, id: Date.now().toString() }));
      setProduct({
        id: "",
        name: "",
        description: "",
        price: "",
        available: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleInputChange}
        placeholder="Product Description"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleInputChange}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
