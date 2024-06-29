import React from 'react'
import NutritionData from '../components/NutritionData'
import DisplayUser from '../components/DisplayUser'

function AdminDashboard() {
  return (
    <div>
        <div style={{maxWidth:'1550px',margin:'auto'}}>
        <h1 style={{textAlign:'left'}}>Admin Dashboard</h1>
        
        {/* <NutritionData/> */}
        <DisplayUser/>
       </div>
    </div>
  )
}

export default AdminDashboard