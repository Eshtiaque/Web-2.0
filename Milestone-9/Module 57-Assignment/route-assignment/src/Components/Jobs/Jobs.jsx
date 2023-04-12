import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../Singlejobs/SingleJob';
// import Jobs from 'Job';

const Jobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);

    const [visible, setVisible] = useState([4]);

    const showMore = () => {
        setVisible((prevValue) => prevValue + 2);
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
            {
              jobs.slice(0, visible).map(job => <SingleJob
                key={job.id}
                job={job}
              ></SingleJob>       )
                
            }
        </div>
        <button onClick={showMore} className='bg-pink-500 font-bold mt-3 text-xs p-2 w-20 rounded-md text-white'>See more</button>
        </div>
    );
};

export default Jobs;