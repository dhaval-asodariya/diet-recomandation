import React, { useEffect, useState } from "react";
import {Box, Button, Drawer,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Login from '../pages/Login'
import SignUp from '../pages/Signup'
import HomePage from "../pages/HomePage";




function AddUserDrawer({isDrawerOpen,toggleDrawer}) {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const navigation = useNavigate();
   
    useEffect(()=>{
        const currentPath = window.location.pathname;
        console.log("currentPath",currentPath)
        currentPath == "/login"? setIsLoginPage(true):setIsLoginPage(false)
         currentPath == '/login'|| currentPath == '/signup'? toggleDrawer(true):toggleDrawer(false) 
    })
    
  return (
    <div >
     
      <Drawer  open={isDrawerOpen} onClose={()=>toggleDrawer(false)}>
        
        {isLoginPage?
        <Login/>
        :
        <SignUp/>
        }
          
       
      </Drawer>
      <HomePage/>
    </div>
  );
}

export default AddUserDrawer;
