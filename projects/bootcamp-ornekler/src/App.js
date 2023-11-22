import logo from './logo.svg';
import './App.css'; 
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Details";
function App() {
  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
     </BrowserRouter>
     </>
    
  );
}

export default App;
