import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    const navigate = useNavigate();
  return (
    <div>
      <p> Hello Username </p>
      <p>Welcome back,</p>
      <div>
        <button onClick={()=>navigate('/')}>
            Logout
        </button>
      </div>
    </div>
  )
}
