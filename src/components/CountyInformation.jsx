import React from "react";
import { Pie } from "recharts";
import PieChartItem from "./PieChartItem"
import CountyData from '../data/countyData.json'
import { useState, useEffect } from 'react';

function CountyInformation({county, state}){
   const [race, setRace] = useState([]);
   const [age, setAge] = useState([]);



    useEffect(() => {
      let str=""
      setRace([])
      if(county.value){
         str=county.value.toString().toLowerCase()+" county"
      }
      else{

      }
      console.log(state.label)
      //let arr=CountyData.find(item=>item.name==str).race
      let data=[], data2=[]

      let arr = CountyData.filter(item => {
         if (item.name==str && item.state==state.label) {
           return item.race
         }
         else{
            return false
         }
       })

       if(arr[0]){
         data.push({name: "White Male", value: arr[0].race.non_hispanic_white_alone_male*100})
         data.push({name: "White Female", value: arr[0].race.non_hispanic_white_alone_female*100})
         data.push({name: "Black Male", value: arr[0].race.black_alone_male*100})
         data.push({name: "Black Female", value: arr[0].race.black_alone_female*100})
         data.push({name: "Asian Male", value: arr[0].race.asian_alone_male*100})
         data.push({name: "Asian Female", value: arr[0].race.asian_alone_female*100})
         data.push({name: "Hispanic Male", value: arr[0].race.hispanic_male*100})
         data.push({name: "Hispanic Female", value: arr[0].race.hispanic_female*100})

         data2.push({name: "0-9", value: arr[0].age["0-4"]+arr[0].age["5-9"]*100})
         data2.push({name: "10-19", value: arr[0].age["10-14"]+arr[0].age["15-19"]*100})
         data2.push({name: "20-29", value: arr[0].age["20-24"]+arr[0].age["25-29"]*100})
         data2.push({name: "30-39", value: arr[0].age["30-34"]+arr[0].age["35-39"]*100})
         data2.push({name: "40-49", value: arr[0].age["40-44"]+arr[0].age["45-49"]*100})
         data2.push({name: "50-59", value: arr[0].age["50-54"]+arr[0].age["55-90"]*100})      
         data2.push({name: "60-69", value: arr[0].age["60-64"]+arr[0].age["65-69"]*100})
         data2.push({name: "70-79", value: arr[0].age["70-74"]+arr[0].age["75-79"]*100})
         data2.push({name: "80+", value: arr[0].age["80-84"]+arr[0].age["85+"]*100})

      }
     

      setRace(data)
      setAge(data2)
    },[county]);

    useEffect(() => {
      //console.log(race)
    },[race]);


 



    return(

      
        <div className="absolute left-0">
        <div className="float-left">
         <h1>{county.value} County, {state.value}</h1>
            <label>
                Race Distribution
                <PieChartItem pieData={race} key={county.value}/>

            </label>
      
        </div>
        <div >
        <label>
            Age Distribution
            <PieChartItem pieData={age} key={county.value}/>

            </label> 

        </div>
         <div>
            <h3>General Statistics</h3>
         </div>

        </div>
    )
}

export default CountyInformation;