import ProductsGrid from "./mui/ProductsGrid";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductsGrid />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
    ;
}

export default App;
