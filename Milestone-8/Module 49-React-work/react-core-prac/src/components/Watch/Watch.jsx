import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] =useState(0);
    const increaseSteps=()=>{
        const allSteps = steps +1;
        setSteps(allSteps);
    }
useEffect(()=>{
    console.log('hello' , steps);
},[steps])
    return (
 <div style={{border:'2px solid black',margin:'10px',padding:'5px'}}>
            <h2>This is My Watch</h2>
            <p>Steps: {steps}</p>
        <button onClick={increaseSteps}>De Dour</button>
       <Dial steps={steps}></Dial>
    </div>
    );
};

export default Watch;