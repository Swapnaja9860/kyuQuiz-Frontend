import React, { Component } from 'react'; //imrc + tab
import { MenuItems}  from "../static_data/MenuItems";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LogoutAction from '../redux/actions/LogoutAction';
import { connect } from 'react-redux';
import userlogo from '../images/userlogo.png';
import logout_icon from '../images/logout_icon.svg';
import Dropdown_user from './dropdown_user';
//import { Button } from "../Button/Button";
//fas fa-bars is for the hamburger menu
//fas fa-times is for the cancel
class Navbar extends Component {

    state = { clicked: false }
    
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleChange = () =>{
         this.props.actions();
    }

    render(){
        let userobj=JSON.parse(localStorage.getItem('user'));
        let name=userobj.firstname;
        let role=userobj.roles[0];
        console.log(role);
        return(
            <nav className="NavbarItems">
           
                <h1 className="navbar-logo"><i className="fab fa-react mb-5 mb-lg-0">KyuQuiz!</i></h1>
                
                <div className="nav-menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> <span  className="mdi mdi-menu  mdi-24px menu"></span> </i> </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
             {/* <Link to='/home' className="nav-links" >Account</Link> 
                <Link to='/report_student' className="nav-links" >Contact us</Link>  */}

                {/* <Link to='/' onClick={this.handleChange} className="nav-links">Sign Out</Link>  */}
                <div class="dropdown">
           
               
               <span className=" nav-links dropdown-toggle p-3 mt-3" style={{fontSize:"20px",border:"no-border"}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
               <span className="pl-5 pr-5"> <img className="login-img-logo mr-3 img-fluid"style={{width:"50px",height:"50px"}}   src={userlogo} alt="Avatar"/>
                       {name}</span>
               </span>
              <div className="dropdown-menu  mr-0" style={{fontSize:"20px"}} aria-labelledby="dropdownMenuButton">
                {/* <a className="dropdown-item" href="#">MyProfile</a> */}
            <span className="dropdown-item nav-links">Welcome user  <b>{name}</b>!!!</span>
                {role==="ROLE_TRAINER"? <Link to='/teacher' className="dropdown-item" ><h6 style={{fontSize:"16px",color:"blue"}}>ViewDashboard</h6></Link> : 
                <Link to='/home' className="dropdown-item" ><h6 style={{fontSize:"16px",color:"blue"}}>ViewDashboard</h6></Link> }
               
                <hr/>
                {/* <a className="dropdown-item" href="#">Settings</a> */}
                <Link to='/' onClick={this.handleChange} className="dropdown-item nav-links">
                <img className="login-img-logo mr-3 img-fluid"style={{width:"20px",height:"20px"}}   src={logout_icon} alt="Avatar"/>Sign Out</Link>
              </div>
            </div>
         
            {/* < Dropdown_user/> */}
                </ul>
            
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(LogoutAction,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Navbar)

// {MenuItems.map((item, index) => {
//     return (
//         <li key={index}>
//             {/* <a className={item.cName} href={item.url}> */}
//             <Link to={item.url} onClick={this.handleChange} className="nav-links" > {item.title}</Link>
           
//             {/* </a> */}
//         </li>
//     )
// })}

// {MenuItems.map((item, index) => {
//     return ( 
//         <li key={index}>
//             {/* <a className={item.cName} href={item.url}> */}
//           <Link to={item.url} className="nav-links"> {item.title}</Link>
           
//             {/* </a> */}
//         </li>
//     )
// })}