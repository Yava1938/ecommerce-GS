import { Route, Routes } from 'react-router-dom'
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/details/:id' element={<ProductDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
