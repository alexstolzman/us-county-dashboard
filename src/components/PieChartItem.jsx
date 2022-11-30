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


render(){
   //Have 9 colors
   const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
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
            <Legend />
            </PieChart>

        </div>
        )}

}


export default PieChartItem;