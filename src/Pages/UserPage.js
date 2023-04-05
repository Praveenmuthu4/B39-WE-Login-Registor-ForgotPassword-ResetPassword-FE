import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function UserPage() {
 const navigate = useNavigate();

  return (
    <div>
      <h2> Hello Username </h2>
      <h3>Welcome back,</h3>
      <div>
        <Button onClick={()=>navigate('/')}>
            Logout
        </Button>
      </div>
    </div>
  )
}
