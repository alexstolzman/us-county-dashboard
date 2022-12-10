import React from "react";
import { render } from "react-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieChartItem extends React.Component{
    constructor(props){
      super(props)
      this.state={
         pieData: props.pieData
      }
    }

  CustomTooltip = ({ active, payload}) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value.toFixed(2)}%`}</label>
       </div>
    );
 }
 return null;
};


render(){
   const COLORS = ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"];
   
        return(
         
            
        <div>
            <PieChart width={730} height={300}>
                <Pie
                data={this.state.pieData}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
            >
                {this.state.pieData.map((entry, index) => (
                    <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip content={<this.CustomTooltip />} />
            <Legend />
            </PieChart>

        </div>
        )}

}


export default PieChartItem;