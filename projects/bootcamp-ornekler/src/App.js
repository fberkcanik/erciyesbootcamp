import logo from './logo.svg';
import './App.css'; 
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Details";
import Posts from "./pages/Posts";
function App() {
  return (
     <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
     </BrowserRouter>
     </>
    
  );
}

export default App;
