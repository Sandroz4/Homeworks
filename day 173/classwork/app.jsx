import React, { useState } from "react";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  const addProduct = () => {
    if (!name) return
    setProducts([...products, { id: Date.now(), name }])
    setName("")
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex space-x-2">
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="New product" />
        <Button onClick={addProduct}>Add</Button>
      </div>
    </div>
  )
}
