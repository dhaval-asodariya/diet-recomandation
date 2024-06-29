import { Button, Link } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
import NutritionData from '../components/NutritionData';
function UserDashboard() {
  return (
    <div>
        
        <div style={{maxWidth:'1550px',margin:'auto'}}>
        <h1>User Dashboard</h1>

        {/* add link to machine learning model */}
        <Link href="https:/google.com" >
        <Button   size='large' sx={{backgroundColor:'#7a0eb0',marginTop:'20px',padding:'15px 20px'}} variant="contained" color="success"

        >
           Diet Recomandation
        </Button></Link>

        <NutritionData/>
        <div style={{marginTop:'100px'}}></div>
        </div>
    </div>
  )
}

export default UserDashboard