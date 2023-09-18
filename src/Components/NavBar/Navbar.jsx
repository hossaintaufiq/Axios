import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";



const Navbar = () => {

    const [open, setOpen] = useState(true);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products/:productId', name: 'ProductDetail' },
        { id: 5, path: undefined, name: 'NotFound' },
    ];


    return (
        <nav className="bg-yellow-200 p-6">

            <div  className="md:hidden text-2xl " onClick={()=>setOpen(!open)}>
                {
                   open === true? 
                   <AiOutlineMenu  />
                   : <AiFillCloseCircle/>
                }
                
            </div>


            <ul className={`md:flex absolute shadow-lg  bg-yellow-200 px-6 text-2xl 
            ${open ? '-top-60':'top-16'} duration-1000
            `}>

                {
                    routes.map(route => <Links key={route.id} route={route} />)
                }

            </ul>


        </nav>
    );
};

export default Navbar;