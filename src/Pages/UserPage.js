import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {API} from '../global';

export default function UserPage() {
  const [data, setData] = useState(false);
    const history = useNavigate();

    const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");
  
      const res = await fetch(`${API}/validuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      });
  
      const data = await res.json();
  
      if (data.status == 401 || !data) {
        console.log("user not valid");
      } else {
        console.log("user verify");
        setLoginData(data)
        history("/");
      }
    }
  
    useEffect(() => {
      setTimeout(()=>{
        DashboardValid();
        setData(true)
      },2000)
  
    }, [])

  return (
    <div>
      <p> Hello Username </p>
      <p>Welcome back,</p>
      <div>
        <button onClick={()=>history('/')}>
            Logout
        </button>
      </div>
    </div>
  )
}
