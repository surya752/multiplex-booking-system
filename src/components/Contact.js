import { color } from "@mui/system";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

function Contact (){
    const [to_name, setTo_name] = useState("");
    const[from_name, setFrom_name] = useState("");
    const[message, setMessage] = useState("");

    const submitInfo = () =>{
        console.log(to_name + from_name + message);

        const emailContent = {
            to_name: to_name,
            from_name: from_name,
            message: message,
        };
        
        emailjs.send('service_zphqzew', 'template_ndvcgxc', emailContent, 'ZY3JAyh2pRyG49bIj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    return(
        <div className="container border"
        style={{marginTop:"50px",
        width:"50%",
        backgroundImage:`url('https://wallpaperaccess.com/full/418711.jpg')`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}>
            <h1 style={{marginTop:'25px' ,color:'white'}}>Contact Me</h1>
            <div className="row" style={{margin:"25px 85px 75px 100px",color:'white'}}
                
                >
                <label>Name</label>
                <input type="name" name="name" className="form-control"
                onChange={(event) => {setTo_name(event.target.value)}}/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control"
                onChange={(event) => {setFrom_name(event.target.value)}}/>

                <label>Message</label>
                <textarea data-testid="para" name="message" rows="4" className="form-control"
                 onChange={(event) => {setMessage(event.target.value)}}/>
                <input type="submit" onClick={submitInfo} value="Send" 
                 className=" btn btn-primary "
                 style={{marginTop:'30px'}}/>

            </div>
        </div>
    )
};
export default Contact;