import React from "react";
import { useNavigate } from "react-router-dom";
import './logout.css'
import { Button } from "@mui/material";

export default function Logout() {
  const navigate = useNavigate();

  return (
    <div className="whole-logout-container">
      <h2> Hello Username </h2>
      <h3>Welcome back,</h3>
      <div>
        <Button onClick={()=>navigate('/')} className='logout-btn'>
            Logout
        </Button>
      </div>
    </div>
  );
}
