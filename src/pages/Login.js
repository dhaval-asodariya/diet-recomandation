
import React, { useState } from 'react';
// import { Button, Input, FormControl, FormLabel,Text } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (<div>
    <div style={{maxWidth:'500px',margin:'auto',padding:'40px 70px'}}>
    <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit}>
    <Typography variant='h4' fontSize='3xl'>Login ..</Typography>
      <FormControl sx={{my:'10px', width: '30ch' }}>
        
        <TextField id="username" value={username} onChange={(e) => setUsername(e.target.value)} label="UserName" variant="outlined" />
      </FormControl>
      
      <FormControl sx={{my:'10px',  width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
        </FormControl>
      <Button sx={{my:'10px', width: '25ch',backgroundColor:'#7a0eb0' }} variant='contained' type="submit">Login</Button>
    </form>
    <Link to='/signup'>dont have acount? SIGNUP</Link>
    </div>
    </div>
  );
};

export default LoginPage;
