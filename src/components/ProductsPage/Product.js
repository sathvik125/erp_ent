import React, { useEffect, useState } from 'react'
import "./Product.css"
import { getDetails } from '../../FirebaseFuncs';
import { editProduct,deleteProduct } from '../../FirebaseFuncs';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
// import "../ProductsPage/ProductManager.css"
import "../ProductsPage/ProductManager.css"
import logo from "../../Assets/giphy.gif"
export const Product = () => {
  const [display,setdisplay]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({
       id:'',
    ProductName: '',
    Category: '',
    Stock: '',
    Price: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target; 
      setProduct({ ...product, [name]: value });
    //   console.log(product);   
  };
    const [data,setdata]=useState(null);
    const refreshData = async()=>{
      console.log("hello");
      const res=await getDetails();
      setdata(res);
    }
    useEffect(() => {
      
      refreshData();
      setdisplay(true);
      
    }, []);
    const handleedit=async()=>{
      await editProduct(product);
      refreshData();
    }
    const openform=(prod)=>{
    
      
      setProduct({"id":prod.id,"ProductName": prod.ProductName,"Category": prod.Category,"Stock":prod.Stock,"Price":prod.Price});
      // console.log(product);
      setIsOpen(true);

    }
    const handleDelete=async()=>{
      await deleteProduct(product["id"]);
      refreshData();
      alert("deleted Successfully");
    }
  return (
    <>
   
{display &&
    <div className="Product">
    <button id='button'   className="button" onClick={()=>{refreshData()}}> Refresh </button>
    <div className="addproductbutton">
    </div>
    <div style={{display:"flex" ,justifyContent:"center"}}>

    <div className="ProductsCard">
        {/* <div className="Productsdetails"> */}
        <table>
        <tr >
            <th>ProductID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            </tr>
           {
           data&&
           data.map((prod)=>{
             return(  
              
                    <tr onClick={()=>{openform(prod)}}>
               <td>{prod.id}</td>
               <td>{prod.ProductName}</td>
               <td>{prod.Category}</td>
               <td>{prod.Price}</td>
               <td>{prod.Stock}</td>
               </tr>
               
              
               )
           })
           }
           </table>
</div>
  
   
    </div>
    <div>
      <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <div className="header"> Enter Product Details </div>
            <button className="close" onClick={close}>&times;</button>
            <div className="content">
              <form className="form">
                <div className="form-row">
                  <label htmlFor="ProductName">Product Name:</label>
                  <input type="text" id="ProductName" name="ProductName" value={product.ProductName} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="Category">Category:</label>
                  <input type="text" id="Category" name="Category" value={product.Category} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="Stock">Stock:</label>
                  <input type="number" id="Stock" name="Stock" value={product.Stock} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="Price">Price:</label>
                  <input type="number" id="Price" name="Price" value={product.Price} onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="actions">
              <button className='button' onClick={() => { handleedit(); close(); }}>Save </button>
              <button className="button" onClick={()=>{handleDelete();close();}}>Delete Product</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
    </div>}
    {!display &&   <img src={logo} alt="studentimg" />}

</>
    )

    
}
