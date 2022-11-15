import React, { Component, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import MyButton from './MyButton';
import {Link} from 'react-router-dom';
import { history } from '../redux/helper/history';

function Forgot_Password(props) {  
    
    const [otp,setOtp]=useState(null);
    const [old_pass,setOld_pass]=useState(null);
    const [new_pass,setNew_pass]=useState(null);
    const [message,set_message] = useState('');

//console.log(props.history.location.state.email)
const handleAPI = ()=>{
    if(old_pass === new_pass)
    {
    const user = {
        email: props.history.location.state.email, 
        otp: otp, 
        password: new_pass,
    }
    console.log(user);
    fetch("http://localhost:3000/api/resetPassword",{
        method : 'POST',
        headers : {'Content-type' : 'application/json'},
         body : JSON.stringify(user)
    })
    .then(response => {
        return response.json()
        .then(json => {
            if(response.ok){
            return json;
            }
            else{
                throw Error(json.message);
            }})
    })
    .then(data => {
                   console.log("this is",data);
                   history.goBack();
    })
    .catch(error => {
    history.push('/');
       //alert(error);
        //window.location.reload();
    })       
    }
    else{
        setOld_pass('');
        setNew_pass('');
        set_message("password didn't match");
        history.push('/forgot_pass')
    }
}
function handleChange_otp(e)
  {
      console.log('otp',e.target.value); 
   setOtp(e.target.value);   
  }
  function handleChange_pass1(e)
  { 
    console.log('old pass',e.target.value);
   setOld_pass(e.target.value);
  }
   function handleChange_pass2(e)
  { 
    console.log('new pass',e.target.value);
   setNew_pass(e.target.value);
  }
  

   
        return (<div className="forgot_pass_body">
               <Fade delay={500}>
                <div className="pop-container " >
                    <div className="container col-md-5">
                        <div >
                            <div className="pop">
                                <h4>Forgot Password</h4>
                                <label className='col-lg-3 text-left' for="otp">Enter Otp</label>
                                <input className='col-lg-5' type="text" name="otp" onChange={handleChange_otp} value={otp} required placeholder="Enter Otp"/><br/>
                        
                        <label className='col-lg-3 text-left'  for="old_password">Password</label>
                        <input className='col-lg-5'  type="password" name="old_password" onChange={handleChange_pass1} value={old_pass} id="old_pass" placeholder="Password" /><br/>
                        <label className='col-lg-3 text-left'  for="new_password">Confirm Password</label>
                        <input className='col-lg-5'  type="password" name="new_password" onChange={handleChange_pass2} value={new_pass} id="new_pass" placeholder="Confirm Password" /><br/>
                        < small id="emailHelp" className="form-text text-danger mb-3 text-justify small-font">{message}</small>    
                                <span >
                                    <button type="button" class="btn btn-primary" onClick={() => {
                                        handleAPI();
                                      }} >Submit</button>
                              {/* <MyButton
                                       // component="I am sourabh"
                                      
                                        text="Submit"
                                        bck=' linear-gradient(
                                            90deg,
                                            rgb(110, 94, 254) 0%,
                                            rgba(73, 63, 251, 1) 100%
                                          )'
                                        color='#fff'
                                    /></Link> */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade></div>
 
        );
    }


export default Forgot_Password; 

