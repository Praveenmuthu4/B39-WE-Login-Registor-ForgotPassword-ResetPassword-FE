import { Link } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SuccessMessage() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>You have Successfully Created your Account</h2>
      <br/>
      <h3>Please Click on <Link href="#" underline="hover" onClick={()=>navigate('/login')}>Login</Link></h3>
    </div>
  )
}
