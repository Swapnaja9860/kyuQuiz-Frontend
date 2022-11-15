import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import Navbar from '../../Components/Navbar';

import Footer from '../../Components/FooterContainer';
import websitelogo from '../../Logo1.png';


//import axios from 'axios';



const USER_SERVICE_URL = 'http://localhost:3000/api/quiz';


function Enrollment(props){
  //const [data, setData] = useState({users: [], isFetching: false});
  const [enrollment, setEnrollment] = useState(null);
  const[genkey,setGenkey]=useState(null);
  const i=0;
  
  function handleChange(e)
  { 
    //this.setState({[e.target.name] : e.target.value });
   console.log('xt',e.target.value);
   setGenkey(e.target.value);
  }

     useEffect(() => {
//    console.log(props);
  setEnrollment(props.history.location.state.tech);
  
    
 }, []);
function checkKey(e)
{ 
  //this.setState({[e.target.name] : e.target.value });
 // console.log(e.target.value);
  // console.log(genkey);
   console.log(genkey);
   console.log("this is key",enrollment.enrollmentKey);
  // console.log(genkey);
  if(genkey==enrollment.enrollmentKey){
    console.log('true');
  }else{
    alert('check your enrollment key')
  }
  console.log("this is enrollment"+enrollment);
}   


  return (<>
  <Navbar/>
      <div className="EnrollmentPage  text-center text-white">
      <img className="EnrollmentImage " src={websitelogo} width="150px" height="150px"  alt="Avatar"/>
          {/* <h1 className ="wrapper-enrollment mt-3"> React Js Quiz</h1><br/><br/> */}
          <div className="wrapper mb-5 mb-lg-0">
 	      <h1>React Js Quiz</h1>
       </div>
          <form className="heading">

            <div class="row justify-content-center">
          {/* {/* <label for ="enno" className="eid  col-md-6 col-xl-4 " style={{color:"black"}}> Enrollment Key To Join</label> */}
           <input type="tel" className="enrol-input col-md-6 col-xl-3" onChange={handleChange} placeholder="Enter Your Enrollment Key" style={{height:"60px"}}></input><br /><br/> 
         
          </div>
          {/* <Link to='/quiz_page'> */}
              {/* <Button className="button-enrollment mt-5" style={{backgroundColor:"rgb(25, 25, 112)"}}>Play quiz</Button> */}
              {/* <Button className="button-enrollment mt-5 set-background" style={{fontSize:"20",fontWeight:"bold"}}>Play quiz</Button> */}
            {/* </Link>  */}

            
          {/* <label for ="enno" className="eid col-12 col-sm-12 col-md-12 col-lg-3 "> Enrollment Key To Join</label>
          <input type="tel" onChange={handleChange} className="enno col-12 col-sm-12 col-md-12 col-lg-3"></input><br /><br/> */}
          {/* <Input type="text" className="enno col-12 col-sm-12 col-md-12 col-lg-3" name="enrol_key"  onChange={handleChange} placeholder="Enter Enrollment key"/><br /><br/> */}
          
          {/* <Link 
                             to=
                             {{
                            pathname: '/quiz_page',
                            state: {
                               enrollment
                            }
                            }}
                           >
          <Button className="button-enrollment" onClick={checkKey}>Play quiz</Button> 
          </Link> */}
{/* 
          {!enrollment ?  (genkey==enrollment.enrollmentKey)? (
            <>
                             <Link 
                             to=
                             {{
                            pathname: '/quiz_page',
                            state: {
                                enrollment
                            }
                            }}
                           >
            
          <Button className="button-enrollment" onClick={checkKey}>Play quiz</Button>
          </Link>
            </>
          ) : (
            <><Button className="button-enrollment" onClick={checkKey}>Play quiz</Button>
            alert('check your enrollment key')</>
          ) : ''
          } */}
           
           
           

          {(genkey==props.history.location.state.tech.enrollmentKey)? (
            <>
                             <Link 
                             to=
                             {{
                            pathname: '/quiz_page',
                            state: {
                                enrollment
                            }
                           }}
                           >
            
          <Button className="button-enrollment mt-5 set-background" style={{fontSize:"20",fontWeight:"bold"}} onClick={checkKey}>Play quiz</Button>
          </Link>
            </>
          ) : (
            <><Button className="button-enrollment mt-5 set-background" style={{fontSize:"20",fontWeight:"bold"}} onClick={checkKey}>Play quiz</Button>
            </>
          )}
            

            

          </form>        
      </div>
      <Footer/>
      </>
   );
  }
export default Enrollment;