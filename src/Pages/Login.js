import { Button, Link } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./login.css";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  email: yup.string().min(5,"Please enter valid").matches("@gmail.com").required("Please a valid Email id"),
  password: yup
    .string()
    .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/g,"Please enter a valid password")
    .required("Please enter your password"),
});

export default function Login() {
  const navigate = useNavigate();

  const [passshow, setpassshow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
    //   loginUser(values);
      console.log("onSubmit", values);
    },
  });

//   const loginUser = (add) => {
//     fetch(`${API}/users/login`, {
//       method: "POST",
//       body: JSON.stringify(add),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Welcome Back, Log In</h1>
          <p>Hi, we are glad you are back. Please login.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form_input_1">
            <label>Username:</label>
            <input
              id="email"
              type='email'
              name="email"
              placeholder="Enter your Username"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          <div className="form_input">
            <div className="two">
              <label>Password:</label>
              <input
                id="Password"
                placeholder="Enter your Password"
                type={!passshow ? "password" : "text"}
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <div className="showpass" onClick={() => setpassshow(!passshow)}>
                {" "}
                {!passshow ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
          <Button type="submit" size="small" className="btn" onClick={()=>navigate('/userDashboard')}>
            Login
          </Button>
          <div className="bottom_form_data">
            <Link href="#" underline="hover" className="link" onClick={()=>navigate('/forgotPassword')}>
              Forget Password?
            </Link>
            <p className="for_signup">Don't have Account?</p>
            <Button type="submit" className="btn_1" onClick={()=>navigate('/register')}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
