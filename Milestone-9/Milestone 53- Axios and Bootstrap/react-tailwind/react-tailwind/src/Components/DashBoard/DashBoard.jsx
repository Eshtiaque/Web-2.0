import React from 'react';
// import { LineChart } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Mobile from '../Mobile/Mobile';


const DashBoard = () => {
    const data = [
        { id: 1, name: "John", physics: 90, chemistry: 80, math: 75 },
        { id: 2, name: "Jane", physics: 85, chemistry: 90, math: 95 },
        { id: 3, name: "Bob", physics: 80, chemistry: 85, math: 90 },
        { id: 4, name: "Alice", physics: 95, chemistry: 75, math: 80 },
        { id: 5, name: "David", physics: 70, chemistry: 85, math: 90 },
        { id: 6, name: "Emily", physics: 85, chemistry: 70, math: 90 },
        { id: 7, name: "Michael", physics: 90, chemistry: 80, math: 85 },
        { id: 8, name: "Sophie", physics: 85, chemistry: 95, math: 80 },
        { id: 9, name: "George", physics: 75, chemistry: 80, math: 85 },
        { id: 10, name: "Olivia", physics: 80, chemistry: 75, math: 90 },
        { id: 11, name: "Daniel", physics: 90, chemistry: 90, math: 95 },
        { id: 12, name: "Lily", physics: 95, chemistry: 80, math: 85 }
      ];
      
    return (
        <div className='bg-yellow-400 p-5 ms-3 me-3 mb-3'>
            <LineChart
            width={500}
            height={300}
            data={data}
            >
                <Line  stroke="black"dataKey="physics"></Line>
                <Line stroke="black"dataKey="chemistry"></Line>
                <Line stroke="black"dataKey="math"></Line>
                <XAxis stroke="black" dataKey= "name"/>
                <YAxis stroke="black"/>
                <Tooltip stroke="black"/>
            </LineChart>
            <Mobile></Mobile>
        </div>
    );
};

export default DashBoard;