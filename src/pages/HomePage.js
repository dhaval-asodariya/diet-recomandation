import React from 'react'
import heroIng from '../imgs/purple heroImg.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigation = useNavigate();
  return (
    <div style={{position:"relative",height:'660px',overflow:'hidden'}}>
        <img style={{width:'99vw',height:'700px'}} src={heroIng}></img>
        <div style={{position:'absolute',top:'100px',left:'100px'}}>
        <h1 style={{fontSize:'60px',textAlign:'left'}}>Take Control Of <br/> Your Helth</h1> 
        <div style={{fontSize:'35px'}} >With Our Tailored Diet Plans</div>
        <Button onClick={()=>navigation('/login')} size='large' sx={{backgroundColor:'#7a0eb0',marginTop:'20px',padding:'15px 20px'}} variant="contained" color="success">
          Create Now!
        </Button>
        </div>
    </div>
  )
}

export default HomePage