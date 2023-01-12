
import "./signup.css"
import React from 'react';
import { Formik, Form } from 'formik';
import ReactDOM from 'react-dom/client';
import * as Yup from 'yup';
import TextField from "./FormValidator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Signup = () => {

  // const Reg = () => {
  //    alert("Register Succefull!");
  //  }
  

    const successMessage = () => {
  
      toast.success("Login Successfull");
  
    };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      mobileNumber: Yup.string()
      .max(10, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
       
        email: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        alert(`${this.state.email} ${this.state.password}  Registered Successfully !!!!`)
        console.log(values)
      }}
    >
      {formik => (
              <div className="shadow">
           <div className="header">
          <center><h1 className="my-2 font-weight-bold .display-2" >Login </h1></center>
          </div>
          <Form className="form">
            
            <TextField label="Email" name="email" type="email" placeholder="Email" required />
            <TextField label="password" name="password" type="password"  placeholder="Password" required/>
            <button  onClick={successMessage} className="btn btn-primary mt-3 "type="submit">Login
            <ToastContainer />
            </button>
            
            
          <div className="form-row-last143">
          <span className="link">Don't have an account?<button  data-testid="btnVerify" className="btn btn-gray"> 
          
          <a href="./Register">Create new</a></button>
         

     
          </span>
        </div>

            
            
          </Form>
          </div>
        
        
      )}
    </Formik>
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Signup/>)

export default Signup;