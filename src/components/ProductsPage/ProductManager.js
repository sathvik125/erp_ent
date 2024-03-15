import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../ProductsPage/ProductManager.css"
import { insertProduct } from "../../FirebaseFuncs";
export const ProductManager = () => {
    
    const [product, setProduct] = useState({
       
        ProductName: '',
        Category: '',
        Stock: '',
        Price: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
       
          setProduct({ ...product, [name]: value });
        
      };
    
    const handleAddProduct = async() => {
        console.log('New Product:', product);
        for(const key in  product){
            console.log(product[key])
            if(product[key]==='')
            {
               alert("please enter all fields");
            return;
        }
        }
        await insertProduct(product);
        alert("successfully added")
        setProduct({
            ProductName: '',
            Category: '',
            Stock: '',
            Price: ''
        });
     
    };
  
    return (
    <>
    <h1>Products Management</h1>
    
   
    <Popup
   
    trigger={<button id='button'   className="button"> Add New Products </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header"> Enter Product Details </div>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">

<form className="form" >
      
      <div className="form-row">
        <label htmlFor="ProductName">Product Name:</label>
        <input type="text" id="ProductName" name="ProductName" value={product.ProductName} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="category">Category:</label>
        <input type="text" id="Category" name="Category" value={product.Category} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="stock">Stock:</label>
        <input type="number" id="Stock" name="Stock" value={product.Stock} onChange={handleChange}  />
      </div>
      <div className="form-row">
      <label htmlFor="price" className="form-label">Price:</label>
        <input type="number" id="Price" name="Price" value={product.Price} onChange={handleChange}  className="form-control" />
       
      
      </div>
      
    </form>
        </div>
        <div className="actions">
         
            <button className='button' onClick={()=>{handleAddProduct();close()}}>Add Product</button>
          <button
            className="button"
            onClick={() => {
                
              console.log('modal closed ');
              close();
            }}
          >
           cancel
          </button>
        </div>
      </div>
    )}
  </Popup>
  </>
    );
  };


