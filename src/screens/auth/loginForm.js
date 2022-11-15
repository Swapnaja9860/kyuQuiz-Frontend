import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import websitelogo from '../../Logo1.png';
import LoginAction from '../../redux/actions/LoginAction';
import FormInput from '../../Components/formInput'
import ButttonSign from '../../Components/button_signin_up'
import FormEmail from '../../Components/formEmail'
import CustomChatbot from '../../Components/CustomChatbot'

class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            email : '',
            password : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAPI = this.handleAPI.bind(this);
    }
  
    handleChange(e)
    {
        this.setState({[e.target.name] : e.target.value });
    }
    
    handleAPI(e){
       
        const user = {
            email: this.state.email,
        }
        console.log(user)
         fetch("http://localhost:3000/api/forgetPassword",{
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
                      console.log("this is",data)
       })
       .catch(error => {
           //alert(error);
           console.log("forgot password",error)
           //window.location.reload();
       })       
    }
    handleSubmit(e)
    {
        e.preventDefault();
        const cred ={
            email: this.state.email,
            password : this.state.password
        }

        this.props.action(cred);   // here we are calling action creator
    }

    render()
    { 
        const post =this.props.userData;
        return( <div className="form-login-bg">
            
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
            <div className=" container">
        <section className="row justify-content-center">
            {/* <section className="col-12"> */}
            <section className="col-10 col-sm-6 col-md-5 col-lg-4">
                <form onSubmit={this.handleSubmit} className="login-form-container">
                <section className="row justify-content-center">
                   
                    <img className="login-img-logo mb-2 img-fluid w-25 h-25 " src={websitelogo} alt="Avatar"/>
                    
                   
                  </section> 
                  
                  <h3 className="login-title">KyuQuiz</h3>
               
                    <div className="login-form-group">
                        
                    
                    <h3 className="login-HeadTitle">SignIn</h3>
                        {/* <label for="exampleInputEmail1">SignIn</label> */}
                        
                        <FormEmail  onChange={this.handleChange} value={this.state.email}/>
                        
                        {/* <label for="exampleInputPassword1"></label> */}
                        <FormInput  type="password" name="password" onChange={this.handleChange} value={this.state.password} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                         <ButttonSign text="SignIn" />
                           
                       <Link to={{
                           pathname: '/forgot_pass',
                           state:{
                               email: this.state.email
                           }}}> <button onClick={this.handleAPI} className="btn btn-link text-warning btn-block">ForgetPassword?</button></Link>
                       
                    </div>
                    <hr />
                    <div className="form-group" style={{position:"relative",left:"20%"}}>

                        <Link to="/register" button="true" className="btn btn-success">Create New Account</Link>
                       


                    </div>
                </form>
            </section>
        </section>
    </div>
           </div>
           )
    }
}
function mapStateToProps(state)
{  
    return{
    userData :state.login.cred
}
}

function mapDispatchToProps(dispatch)
{
   return { action : bindActionCreators(LoginAction,dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)