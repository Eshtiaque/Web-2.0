import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='flex justify-around'>
        <div>
            <h1 className='text-2xl font-extrabold '>Found Career</h1>
        </div>

        <div className='flex gap-6 ms-6'>
            <p><Link to="">Home</Link></p>
            <p><Link to="Statistic">My Statistic</Link></p>
            <p><Link to="">Applied-Jobs</Link></p>
            <p><Link to="Blogs">Blogs</Link></p>
        </div>

        <div>
    <button className='font-bold text-white p-2 rounded-md bg-pink-500'>Start Applying</button>
        </div>
    </nav>
    );
};

export default Nav;

// About the project:
//1. Job search functionality: The application should provide job search functionality, allowing job seekers to search for jobs based on their preferred location, job title, and industry. The application should be able to display relevant job listings that match the job seeker's search criteria.
//2. Resume/CV builder: The application should provide a resume/CV builder, allowing job seekers to create a professional-looking resume that showcases their skills, experience, and education. The application should allow job seekers to save their resume/CV for future use and allow them to download it in a variety of formats.
//3. Personalized dashboard: The application should provide a personalized dashboard for each job seeker, allowing them to track their job applications, saved job listings, and resume/CV. The dashboard should also provide recommendations for job listings based on the job seeker's search history and preferences.
//4. Interview preparation tools: The application should provide interview preparation tools, such as interview question generators, interview tips and advice, and mock interview simulations. These tools can help job seekers prepare for job interviews and increase their chances of getting hired.
//5. Career advice and resources: The application should provide career advice and resources, such as job market trends, salary information, and career development tips. These resources can help job seekers make informed decisions about their career paths and improve their chances of success in the job market.

