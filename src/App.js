import './App.css';

// import { Login } from './components/Login';
// import { Navbar } from 'react-bootstrap';
import { Navbar } from './components/Navbar/Navbar';
import { Product } from './components/ProductsPage/Product';
import { Order } from './components/Orders/Order';
import { ProductManager } from './components/ProductsPage/ProductManager';
import { Route,Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'element={ <> <Navbar/> <Dashboard/></>}/>
      <Route path='/productdetails'element={ <> <Navbar/>  <ProductManager/>  <Product/> </>}/>
      <Route path='/orders'element={ <> <Navbar/>  <Order /> </>}/>
      </Routes>
 
    </div>
  );
}

export default App;
