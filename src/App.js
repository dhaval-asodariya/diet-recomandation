import logo from './logo.svg';
import React ,{useState,useEffect}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import LoginRegistetrDrawer from './components/LoginRegisterDrawer'
import { AuthProvider, useAuth } from './context/AuthContext';
import { Box } from '@chakra-ui/react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {
  const [isDrawerOpen,setIsDrawerOpen] = useState(true);
const navigation = useNavigate();

  function toggleDrawer( isopen){
    setIsDrawerOpen(isopen)
    const currentPath = window.location.pathname;
    !isopen && navigation('/');
  }
  return (
    
     
      <AuthProvider>
        
        <div>
          <Navbar/>
          {/* <LoginRegistetrDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> */}
          {/* <HomePage/> */}
          
          <Box >
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<LoginRegistetrDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />} />
            <Route path="/signup" element={<LoginRegistetrDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />} />
            <Route
              path="/user-dashboard"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
           
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          </Box>
        </div>
      
     </AuthProvider>
   
  );
}

export default App;
