import React,{useState} from "react";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setAllUserData } from '../Redux/UserDataSlice'

function Signup() {
    const [newUser, setNewUser] = useState({
        username:'',
        password:'',
        email:'',
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const allData = useSelector((state) => state.UserData.AllUserData);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
 function handleUserChange(e){
    const {name,value} = e.target;
    
    setNewUser((priv)=>{
        return {...priv,[name]: value}
    })
    console.log("newUser",newUser);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   const matchUser = allData.filter(data=> (data.username == newUser.username))
   if(matchUser.length>0){
    alert('Username is taken, pls change it');
   }else{
    dispatch(setAllUserData(newUser));
    navigation('/login')
   }
   
  };
  return (
    <div>
      <div style={{ maxWidth: "500px", margin: "auto", padding: "40px 70px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" fontSize="3xl">
            Sign Up ..
          </Typography>
          <FormControl sx={{ my: "10px", width: "30ch" }}>
            <TextField
              id="email"
              name='email'
              value={newUser.email}
              onChange={(e) => handleUserChange(e)}
              label="Email"
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ my: "10px", width: "30ch" }}>
            <TextField
              id="username"
              name='username'
              value={newUser.username}
              onChange={handleUserChange}
              label="UserName"
              variant="outlined"
            />
          </FormControl>

          <FormControl sx={{ my: "10px", width: "30ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
              value={newUser.password}
              onChange={(e) => handleUserChange(e)}
              label="Password"
              name='password'
            />
          </FormControl>
          <Button
            sx={{ my: "10px", width: "25ch",backgroundColor:'#7a0eb0' }}
            variant="contained"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <Link to="/login">already have acount? LogIn</Link>
      </div>
    </div>
  );
}

export default Signup;
