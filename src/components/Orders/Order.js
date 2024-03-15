import React from 'react'
import "./Order.css"

export const Order = () => {
    const orders = [
        {
          id: '1',
          Productid: 'PROD123',
          ProductName: 'Product 1',
          CustomerName: 'John Doe',
          Address: '123 Main St, City, Country',
          Cost: '$50'
        },
        {
          id: '2',
          Productid: 'PROD456',
          ProductName: 'Product 2',
          CustomerName: 'Jane Smith',
          Address: '456 Elm St, City, Country',
          Cost: '$75'
        },
        {
          id: '3',
          Productid: 'PROD789',
          ProductName: 'Product 3',
          CustomerName: 'Alice Johnson',
          Address: '789 Oak St, City, Country',
          Cost: '$100'
        },
        {
            id: '4',
            Productid: 'PROD456',
            ProductName: 'Product 4',
            CustomerName: 'Bob Johnson',
            Address: '789 Maple St, City, Country',
            Cost: '$85'
          },
          {
            id: '5',
            Productid: 'PROD789',
            ProductName: 'Product 5',
            CustomerName: 'Emily Brown',
            Address: '456 Pine St, City, Country',
            Cost: '$120'
          },
          {
            id: '6',
            Productid: 'PROD123',
            ProductName: 'Product 6',
            CustomerName: 'David Wilson',
            Address: '123 Oak St, City, Country',
            Cost: '$95'
          },
          {
            id: '7',
            Productid: 'PROD789',
            ProductName: 'Product 7',
            CustomerName: 'Sarah Davis',
            Address: '456 Elm St, City, Country',
            Cost: '$110'
          },
          {
            id: '8',
            Productid: 'PROD456',
            ProductName: 'Product 8',
            CustomerName: 'Michael Johnson',
            Address: '789 Cedar St, City, Country',
            Cost: '$70'
          },
          {
            id: '9',
            Productid: 'PROD123',
            ProductName: 'Product 9',
            CustomerName: 'Laura Lee',
            Address: '123 Walnut St, City, Country',
            Cost: '$55'
          },
          {
            id: '10',
            Productid: 'PROD789',
            ProductName: 'Product 10',
            CustomerName: 'Alex Smith',
            Address: '789 Cherry St, City, Country',
            Cost: '$130'
          }
      ];
      
  return (
    <div className="Product">
    
    <h1>Order Details</h1>
    <div className="addproductbutton">
    </div>
    <div style={{display:"flex" ,justifyContent:"center"}}>

    <div className="ProductsCard">
        {/* <div className="Productsdetails"> */}
        <table>
        <tr >
            <th>OrderID</th>
            <th>ProductID</th>
            <th>Product Name</th>
            <th>CustomerName</th>
            <th>Address</th>
       
            
            <th>Cost</th>
            </tr>

           {
           orders&&
           orders.map((order)=>{
             return(  
            
                    <tr >
               <td>{order.id}</td>
               <td>{order.Productid}</td>
               <td>{order.ProductName}</td>
               <td>{order.CustomerName}</td>
            
               <td>{order.Address}</td>
               <td>{order.Cost}</td>
               </tr>
               )
           })
           }
           </table>
</div>
       
     
    </div>
  </div>
  )
}
