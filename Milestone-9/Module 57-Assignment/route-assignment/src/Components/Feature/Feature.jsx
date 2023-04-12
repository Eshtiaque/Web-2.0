import React from 'react';
import Jobs from '../Jobs/Jobs';
// import Slice from '../Slice/Slice';

const FeaturedJobs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mt-4 mb-4'>Featured Jobs</h2>
            <p className='mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <Jobs></Jobs>
            
        </div>
        
    );
};

export default FeaturedJobs;