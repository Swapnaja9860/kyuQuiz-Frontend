import React, { PureComponent } from 'react';
import  "../styles/_charts.scss";
import {
  PieChart, Pie, Sector, Cell,BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter, 
   ZAxis,  ResponsiveContainer, ComposedChart,Line, Area, 
} from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
// const data1 = [
  //   {
  //     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  //   },
  //   {
  //     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  //   },
  //   {
  //     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  //   },
  //   {
  //     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  //   },
  //   {
  //     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  //   },
  //   {
  //     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  //   },
  //   {
  //     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  //   },
  // ];
  const data01 = [
    { x: 1, y: 5 ,z : 5 }, { x: 2, y: 8  ,z : 2 },
    { x: 3, y: 6  ,z : 4 }, { x: 4, y: 7  ,z : 3},
    { x: 5, y: 2   ,z : 8}, { x: 6, y: 10   ,z : 0},
    { x: 7, y: 3  ,z : 5 }, { x: 8, y: 9  ,z : 1},
    { x: 9, y: 4   ,z : 6}, { x: 10, y: 5   ,z : 5},
  ];
  const data02 = [
    { x: 1, y: 4 ,z : 6  }, { x: 2, y: 5,z : 5   },
    { x: 3, y: 2 ,z : 8  }, { x: 4, y: 10 ,z : 0 },
    { x: 5, y: 7  ,z : 3 }, { x: 6, y: 9 ,z : 1  },
    { x: 7, y: 4 ,z : 6  }, { x: 8, y: 3,z : 8  },
    { x: 9, y: 6 ,z : 4  }, { x: 10, y: 7 ,z : 3  },
  ];
  const data3 = [
    {
      name: 'Quiz A', Score: 10, Attempts: 1,
    },
    {
      name: 'Quiz B', Score: 5, Attempts: 4,
    },
    {
      name: 'Quiz C', Score: 7, Attempts: 3, 
    },
    {
      name: 'Quiz D', Score: 3, Attempts: 1, 
    },
    {
      name: 'Quiz E', Score: 9, Attempts: 2, 
    },
  
  ];
  
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (<>
    <div class="grid-container">
    {/* <div class="grid-item">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart></div> */}
      {/* <div class="grid-item">
      <BarChart
        width={500}
        height={300}
        data={data1}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart></div> */}
      <div class="grid-item">
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Question No." unit="" />
        <YAxis type="number" dataKey="y" name="Correct " unit="" />
        <ZAxis type="number" dataKey="z" name="Wrong" unit="" />
        
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Technical" data={data01} fill="#8884d8" shape="triangle" />
        <Scatter name="Non Technical" data={data02} fill="#82ca9d" shape="circle" />
        
        
        
      </ScatterChart></div>
      <div class="grid-item">
      <ComposedChart
        width={500}
        height={400}
        data={data3}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="Score" dataKey="Score" fill="#8884d8" stroke="#8884d8" />
        <Bar  type="Attempts"dataKey="Attempts" barSize={20} fill="#413ea0" />
        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart></div>
      </div>
   </> );
  }
}
