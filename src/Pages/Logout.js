import React from "react";
import { useNavigate } from "react-router-dom";
import './logout.css'

export default function Logout() {
  const navigate = useNavigate();

  return (
    <div className="whole-logout-container">
      <button type="submit" onClick={() => navigate("/")} className='logout-btn'>
        Logout
      </button>
    </div>
  );
}
