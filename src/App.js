import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";

function App() {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <AddProductForm />
      <ProductList onEdit={handleEditProduct} />
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
