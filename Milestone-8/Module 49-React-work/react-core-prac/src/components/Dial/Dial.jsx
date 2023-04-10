import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid black',margin:'10px',padding:'1px'}}>
            <h4>This is Dial Component</h4>
            <p>Your Steps Count: {props.steps}</p>
        </div>
    );
};

export default Dial;