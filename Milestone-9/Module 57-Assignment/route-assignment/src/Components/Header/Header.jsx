import React from 'react';

const Header = () => {
    return (
        <div className='grid grid-cols-2 mt-10 text-left'>
            <div>
                <h1 className='text-4xl mt-5 mb-4 font-bold'>Hey, Let's Code <br /><span> The Career</span></h1>
                <p className='mb-4 p-5'>Think out the box and build your career<br />Get all information you need. Let's found the job. Fly on the sky.
                We need to re brand hope. The era of everything in our lives fitting neatly in a box is done. That world is over. We need hope—but we need a hope that is robust enough to speak to real life. </p>
                <button className='font-bold text-white p-2 rounded-md bg-pink-500'>Get Started</button>
            </div>
            <div>
                <img className='w-25 h-25' src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
        </div>
    );
};

export default Header;