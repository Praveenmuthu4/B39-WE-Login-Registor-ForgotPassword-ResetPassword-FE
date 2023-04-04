import React from "react";
import {useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Dashboard.css";
import { Link, Popover } from "@mui/material";


export default function Dashboard() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="whole-dashboard">
            <p className="top-dashboard-container">Login Dashboard</p>
            <Button
              color="inherit"
              type="submit"
              aria-describedby={id}
              onClick={handleClick}
              className='dashboard-button'
            >
              <Avatar>L</Avatar>
            </Button>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <p><button onClick={()=>navigate('/login')} type='submit'>Login</button></p>
              </Typography>
            </Popover>
           
          </div>
        </Toolbar>
      </AppBar>
      <div>
        Weclome,Please Click on <Link href="#" underline="hover" onClick={()=>navigate('/login')}>Login</Link>to go further
      </div>
    </Box>
  );
}
