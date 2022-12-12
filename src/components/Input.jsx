import React from "react";
import Select from 'react-select'
import Counties from '../data/counties.json'
import States from '../data/states.json'
import { useState, useEffect } from 'react';

function Input({stateChanger, countyChanger}){
        const [state, setState] = useState({value: "Alabama", label: "AL"});
        const [county, setCounty] = useState("");
        const [counties, setCounties] = useState([]);

    useEffect(() => {
        var countiesState=[]
        
        Counties.forEach((item)=>{
            if(item.State===state.value){
                countiesState.push({value: item.County, label: item.County})
            }
            
        })
        setCounties(countiesState)
        setCounty("");
        stateChanger(state);
      },[state]);

      useEffect(() => {
        countyChanger(county);
      },[county]);
   

    return(
        <div className="py-8">
            <form className="">
                <label className="font-bold ">
                    County
                    <Select value={county} options={counties} onChange={e=>setCounty(e)} />
                    
                </label>
                <label className="font-bold">
                    State
                    <Select value={state} options={States} onChange={e=>setState(e)} />
                </label>
            </form>
        </div>
    )
}


export default Input;