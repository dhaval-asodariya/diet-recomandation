import React, {useState} from 'react'

import { Box, Grid, MenuItem, Button,Avatar,MenuList,Menu,Stack, Typography, IconButton, } from '@mui/material'
import logo from '../imgs/green logo.png'
  import {  useAuth } from '../context/AuthContext';
  import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
  
  
  export default function Navbar() {
    const [anchorElUser, setAnchorElUser] = useState(null)
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { isAuthenticated,logout,login } = useAuth();
    const navigate = useNavigate();
    const loggedinobj = useSelector((state) => state.UserData.LoggedInObj);
    const isAdminLog = useSelector((state) => state.UserData.isAdminLog);

    console.log("loggedinobj",loggedinobj)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    return (
      <Box sx={{background:'#F1e5FF'}} >
        <Box sx={{maxWidth:'1500px',margin:'auto'}} px={2} py={2}>
          <Stack h={16} direction={'row'} sx={{maxWidth:'1500px',margin:'auto',display:'flex'}} alignItems={'center'} justifyContent={'space-between'}>
            <Box  sx={{cursor:'pointer',fontSize:'30px',display:'flex',alignItems:'center'}} onClick={()=>navigate('/')}>
                <img style={{width:'100px',height:"100px"}} src={logo}></img>
                <h5 > Diet Recomandation system</h5></Box>
  
            {/* <Stack alignItems={'center'}> */}

              <Stack direction={'row'} spacing={7}>
                
  
              {
              !isAuthenticated
            
              ?
              <Box sx={{ flexGrow: 0 }}>
            
              
                <Button size={'large'} sx={{color:'#7a0eb0',border:'1px solid #7a0eb0'}} onClick={handleOpenUserMenu} variant="outlined">Login</Button>
              
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography onClick={()=>navigate('/login')} textAlign="center">Login as Admin</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography onClick={()=>navigate('/login')} textAlign="center">Login As User</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography onClick={()=>navigate('/signup')} textAlign="center">Sign Up</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
             
             :
             <Button variant="outlined"
             size={'large'} sx={{color:'#7a0eb0',border:'1px solid #7a0eb0'}}
            //   onClick={()=>navigate('/login')}
            
              
              >{isAdminLog?'Admin':loggedinobj[0].username}</Button>
            
             }
              </Stack>
            {/* </Stack> */}
          </Stack>
        </Box>
      </Box>
    )
  }