import React, { Component } from 'react'; //imrc + tab
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LogoutAction from '../redux/actions/LogoutAction';
import { connect } from 'react-redux';
import userlogo from '../images/user.svg';
class Dropdown_user extends React.Component{
//  constructor(props){
//      super(props)
//  }
 handleChange = () =>{
    this.props.actions();
}
    render(){
        let userobj=JSON.parse(localStorage.getItem('user'));
        console.log(userobj);
        let name=userobj.firstname;
        let role=userobj.roles[0];
        console.log(role);
        return(
            <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle p-3 mt-3" style={{backgroundColor:"blue"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                       <span> <img className="login-img-logo mr-3 img-fluid"style={{width:"30px",height:"30px"}}   src={userlogo} alt="Avatar"/>
                       {name}</span>
               </button>
             
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {/* <a className="dropdown-item" href="#">MyProfile</a> */}
                {role==="ROLE_TRAINER"? <Link to='/teacher' className="dropdown-item" >MyProfile</Link> : 
                <Link to='/home' className="dropdown-item" >Account</Link> }
               
                <hr/>
                <a className="dropdown-item" href="#">Settings</a>
                {/* <Link to='/' onClick={this.handleChange} className="dropdown-item">Sign Out</Link> */}
              </div>
            </div>
            
        )
    }
}

export default Dropdown_user;