import React from "react";
import { Pie } from "recharts";
import PieChartItem from "./PieChartItem"

function CountyInformation(){




    return(
        <div className="flex flex-row">
        <div className="object-left">
            <label>
                Race Distribution
                <PieChartItem pieData={[
      {
         name: "Apple",
         value: 54.85
      },
      {
         name: "Samsung",
         value: 47.91
      },
      {
         name: "Redmi",
         value: 16.85
      },
      {
         name: "One Plus",
         value: 16.14
      },
      {
         name: "Others",
         value: 10.25
      }
   ]}/>

            </label>
      
        </div>
        <div className="object-right">
        <label>
            Age Distribution
            <PieChartItem pieData={[
      {
         name: "Apple",
         value: 54.85
      },
      {
         name: "Samsung",
         value: 47.91
      },
      {
         name: "Redmi",
         value: 16.85
      },
      {
         name: "One Plus",
         value: 16.14
      },
      {
         name: "Others",
         value: 10.25
      }
   ]}/>

            </label> 

        </div>
        </div>
    )
}

export default CountyInformation;