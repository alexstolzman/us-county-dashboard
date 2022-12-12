import React from "react";
import PieChartItem from "./PieChartItem"
import CountyData from '../data/countyData.json'
import { useState, useEffect } from 'react';

function CountyInformation({county, state}){
   const [race, setRace] = useState([]);
   const [age, setAge] = useState([]);
   const [countyData, setCountyData]=useState([]);


    useEffect(() => {
      let str="", data=[], data2=[]

      setAge([])
      setRace([])
      setCountyData([])

      if(county.value){
         str=county.value.toString().toLowerCase()+" county"
      }
      if(state.label=="AK" && county.value){
         str=county.value.toString().toLowerCase()
      }


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

      setCountyData(arr[0])
      

      }
     
      
      setRace(data)
      setAge(data2)
    },[county, state]);


    return(

      
        <div className="py-8">
                {(() => {
              if (county.value!=undefined && state.label!="AK"){
                  return (
                     <h1>{county.value} County, {state.value}</h1>
                  )
              }
              else{
               return(
                  <h1>{county.value}, {state.value}</h1>
               )
              }
              return null;
            })()}

        <div className="flex justify-center py-8">
            
            <label>
                Race Distribution
                <PieChartItem pieData={race} key={county.value}/>

            </label>

            <label>
            Age Distribution
            <PieChartItem pieData={age} key={county.value}/>

            </label> 
      
        </div>
    

         <div>
            <h3 className="text-2xl font-bold py-3">General Statistics</h3>
            <table className="table-auto border-separate border border-green-900">
               <thead>
               <tr>
                  <th className="border-solid border-2 border-indigo-600">Area</th>
                  <th className="border border-slate-400border-spacing-20">Total Population</th>
                  <th className="border border-slate-400border-spacing-20">Male Population</th>
                  <th className="border border-slate-400border-spacing-20">Female Population</th>
                  <th className="border border-slate-400border-spacing-20">Life Expectancy</th>
                  <th className="border border-slate-400border-spacing-20">Average Income</th>
                  <th className="border border-slate-400border-spacing-20">Poverty Rate</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                  <td className="border border-slate-400border-spacing-20">{countyData["area (km^2)"]} km^2</td>
                  <td className="border border-slate-400border-spacing-20">{countyData.male+countyData.female}</td>
                  <td className="border border-slate-400border-spacing-20">{countyData.male}</td>
                  <td className="border border-slate-400border-spacing-20">{countyData.female}</td>
                  <td className="border border-slate-400border-spacing-20">{countyData["life-expectancy"]}</td>
                  <td className="border border-slate-400border-spacing-20">${countyData.avg_income}</td>
                  <td className="border border-slate-400border-spacing-20">{countyData["poverty-rate"]}</td>
               </tr>
               </tbody>
            </table>

         </div>

        </div>
    )
}

export default CountyInformation;