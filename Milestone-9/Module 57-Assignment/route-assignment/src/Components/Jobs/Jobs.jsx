import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../Singlejobs/SingleJob';
// import Jobs from 'Job';

const Jobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div className='grid grid-cols-2'>
            {
              jobs.map(job => <SingleJob
                key={job.id}
                job={job}
              ></SingleJob>                )
                
            }
        </div>
    );
};

export default Jobs;