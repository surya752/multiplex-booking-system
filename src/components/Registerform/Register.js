import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css"
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Register() {
  
  let postUser = (registerdata) => {
    console.log(registerdata);
    let requestBody = {
      userName:registerdata.userName,
      userType:registerdata.userType,
      password:registerdata.password,
      mobileNo:registerdata.mobileNo,
      emailId:registerdata.email
    };
    console.log(requestBody);
    axios
      .post("http://localhost:4439/Users/addUsers", requestBody)
      .then((res) => console.log(res.data));
  };
  const signupSchema = Yup.object().shape({
    userName: Yup.string("First name should be a string").required(
      "firstname is required"
    ),
    age: Yup.number("age should be a number").required(),
    userType: Yup.string(),
    email: Yup.string().email("invalid email").required("email cant be empty"),
    mobileNo: Yup.number().required("mobileno cannot be empty"),
    password: Yup.string()
      .required("Password cant be empty")
      .min(8, "password week")
      .max(16, "password too long"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password should match"
    ),
  });

  let handleSubmit = (values) => {
    console.log(values);
    postUser(values);
  };
  return (
    
   
    <div className="shadow49">
    <div className="container">
    <center><h1 className="h1">Register</h1></center>
    
      <Formik
        initialValues={{
          userName: "",
          age: 0,
          userType:"",
          email: "",
          mobileNo:0,
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        {(props) => (
          <Form className="form">
            <div>
              <label>User Name:</label>
              <Field  className="text43"type="text" name="userName" placeholder=" Name" required/>
              <ErrorMessage name="userName">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="age">
              <label>Age:</label>
              <Field  className="text43" type="text" name="age" placeholder="Age" required />
              <ErrorMessage name="age">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="usertype">
              <label>Gender: </label>
              <Field  data-testid="ratioVerify" type="radio" value="M" name="userType"/>Male
              <Field type="radio" value="F" name="userType"/>Female
              
              <ErrorMessage name="userType">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="email">
              <label>Email:</label>
              <Field  className="text43" type="email" name="email" placeholder="Email" required />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="mobileno">
              <label>mobileNo:</label>
              <Field  className="text43" type="text" name="mobileNo" placeholder="Mobile Number" required />
              <ErrorMessage name="mobileNo">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="pass">
              <label>Password:</label>
              <Field  className="text43" type="password" name="password" placeholder="password" required />
              <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="confpass">
              <label>Confirm Password:</label>
              <Field  className="text43" type="password" name="confirmPassword" placeholder="Confirm Password" required/>
              <ErrorMessage name="confirmPassword">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <button data-testid="btnVerify" type="submit" className="loginbut" onClick={() => postUser()}>submit</button>
            
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}

export default Register;