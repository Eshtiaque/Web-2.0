import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import React from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            name: 'Home', id: 1, path: '/'
        }, {
            name: 'About', id: 2, path: '/about'
        }, {
            name: 'Services', id: 3, path: '/services'
        }, {
            name: 'Blog', id: 4, path: '/blog'
        }, {
            name: 'Contact', id: 5, path: '/contact'
        }
    ];
    return (
        <>
            <nav className="bg-purple-400">
                <div onClick={() => setOpen(!open)} className="md:hidden">
 <span>
                        {
     open === true ?
      < XMarkIcon className="h-6 w-6 text-blue-500"/> 
      : < Bars3Icon className="h-6 w-6 text-blue-500" />
      }
      </span>

                </div>
<ul className={`md:flex absolute md:static bg-purple-400 duration-500 pl-8 pb-4 ${open?'top-6':'-top-48'}`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
            </nav>
        </>
    );
};
export default Navbar;