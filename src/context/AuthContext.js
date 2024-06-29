import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {setAllUserData,setLoggedInData,setAdminLog } from '../Redux/UserDataSlice'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log('in AuthProvider');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUserData = useSelector((state) => state.UserData.AllUserData);
  const toast = useToast();

  const login = (username, password) => {
    console.log('login called');
    const matchData =allUserData.filter((data)=>data.username == username && data.password == password )
    console.log("matchData",matchData)
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      dispatch(setAdminLog(true));
      navigate('/admin-dashboard');
      toast({
        title: 'Logged in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }else if(matchData.length>0 ){
        setIsAuthenticated(true);
        dispatch(setLoggedInData(matchData))
        navigate('/user-dashboard');
    }
     else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    console.log('logout called');
    setIsAuthenticated(false);
    navigate('/login');
    toast({
      title: 'Logged out.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
