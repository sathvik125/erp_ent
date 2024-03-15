import React from 'react'
import { Chart } from "react-google-charts";
import "./Dashboard.css"
export const Dashboard = () => {
    
     const data = [
        ["Month", "No.of.Orders", { role: "style" },{role: 'link'}],
        ["January", 50, "#b87333","http://localhost:3000/productdetails"], // RGB value
        ["February", 40, "silver","/wdw"], // English color name
        ["March", 55, "gold","/wdw"],
        ["April", 30, "color: #e5e4e2","/wdw"], // CSS-style declaration
      ];
      const data1 = [
        ["Orders", "ProductsReturned"],
        ["Jan", 11],
        ["Feb", 21],
        ["March", 2],
        ["April", 2],
        ["May", 7],
      ];
      
      const options = {
        title: "Product Returned",
        is3D: true,
      };
  return (
    <div className="charts">
<div className='chartelement'>

        <Chart chartType="ColumnChart" width="600px" height="500px" data={data} />
        <br />
        <h1 >Orders Summary</h1>
        
        
        </div>
        <div className='chartelement'>
        <Chart
          chartType="PieChart"
          data={data1}
          options={options}
          width="600px"
          height="500px"
          style={{ textAlign: 'right'}}
        />
        <br />
        <h1 >Return Product Report</h1>
        </div>
    </div>
    // </>

    
  )
  }





