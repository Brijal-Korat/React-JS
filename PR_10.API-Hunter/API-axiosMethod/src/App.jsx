import { useEffect, useState } from "react";

function App() {
  
  const [products, setProducts] = useState("");

  const getProducts = async () => {
    try {
      let productData = await fetch(`https://dummyjson.com/products`, {
        method: "GET"
      })
      let res = await productData.json();
      console.log(res.products);
      setProducts(res.products);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <div align="center">
      <h2>API_Hunter calling with axios method</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Dimentions</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td></td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;

