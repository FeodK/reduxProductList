import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, toggleAvailability } from "../store/productSlice";

const ProductList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  const handleEdit = (product) => {
    onEdit(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Status: {product.available ? "Available" : "Out of Stock"}</p>
              <button onClick={() => handleToggleAvailability(product.id)}>
                {product.available
                  ? "Mark as Unavailable"
                  : "Mark as Available"}
              </button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button onClick={() => handleEdit(product)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
