import { Outlet, Link } from "react-router-dom";
import {
    //Navbar,
    //Collapse,
    Typography,
    //IconButton,
  } from "@material-tailwind/react";


const Layout = () => {
  return (
    <>
    <div className="flex items-end mt-10">
    <ul className="  my-24 ml-44 mr-44 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
    <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >

      <Link to="/"><img src="/images/llogo4.png"  alt="logo" /></Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >
      <Link to="/">Home</Link>
        
      </Typography>
      
        
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >
      <Link to="/blogs">Blogs</Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >
       <Link to="/compte">Compte</Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >
      <Link to="/contact">Contact</Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-5xl "
      >
       <Link to="/error"> </Link>
        
      </Typography>
      </ul>
      </div>
      
      <Outlet />
    </>
  )
};

export default Layout;