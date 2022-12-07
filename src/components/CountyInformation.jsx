import React from "react";
import { Pie } from "recharts";
import PieChartItem from "./PieChartItem"
import CountyDate from '../data/countyData.json'
import { useState, useEffect } from 'react';

function CountyInformation({county, state}){
   const [race, setRace] = useState([]);
   const [age, setAge] = useState([]);



  

    useEffect(() => {
      //console.log(county.value)
      let str=county.value.toString().toLowerCase()+" county"
      let arr=CountyDate.find(item=>item.name=str).race
      let data=[]
      console.log(arr.non_hispanic_white_alone_male)

      data.push({name: "non_hispanic_white_alone_male", value: arr.non_hispanic_white_alone_male*100})
      data.push({name: "non_hispanic_white_alone_female", value: arr.non_hispanic_white_alone_female*100})
      data.push({name: "Black Male", value: arr.black_alone_male*100})
      data.push({name: "Black Female", value: arr.black_alone_female*100})
      data.push({name: "Asian Male", value: arr.asian_alone_male*100})
      data.push({name: "Asian Female", value: arr.asian_alone_female*100})
      data.push({name: "Hispanic Male", value: arr.hispanic_male*100})
      data.push({name: "Hispanic Female", value: arr.hispanic_female*100})

      setRace(data)
    },[county]);

    useEffect(() => {
      console.log(race)
    },[race]);


 



    return(

      
        <div className="absolute left-0">
        <div className="float-left">
         <h1>{county.value} County, {state.value}</h1>
            <label>
                Race Distribution
                <PieChartItem pieData={race} key={race}/>

            </label>
      
        </div>
        <div >
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
         <div>
            <h3>General Statistics</h3>
         </div>

        </div>
    )
}

export default CountyInformation;