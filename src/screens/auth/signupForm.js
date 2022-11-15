import React from 'react'
import SignupAction from '../../redux/actions/signupAction'
import {connect} from 'react-redux' 
import { bindActionCreators } from 'redux';
import websitelogo from '../../Logo1.png';
import FormInput from '../../Components/formInput'
import ButttonSign from '../../Components/button_signin_up'
import FormEmail from '../../Components/formEmail';
import { Link } from 'react-router-dom';

class SignUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            firstName : '',
            lastName :'',
            email : '',
            Password : '',
            Role : 'trainee',
            confirm_password :'',
            message : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        this.setState({[e.target.name] : e.target.value});
        console.log("role value", {[e.target.name] : e.target.value})
    }

    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.confirm_password === this.state.Password)
        {
        const user_data ={
            firstname : this.state.firstName,
            lastname : this.state.lastName,
            email : this.state.email,
            password : this.state.Password,
            roles : [this.state.roles]
        }    
        this.props.action(user_data);
       }
       else{
        //    alert("Password didn't match");
           this.setState({Password:''});
           this.setState({confirm_password:''})
           this.setState({message : "password didn't match"})
          // window.location.reload();
       }
    }

    render()
    {
        return(<div className='form-login-bg'>
            <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
            <div className="container">
        
            <section className="row justify-content-center">
                <section className="col-10 col-sm-6 col-md-5 col-lg-4">
                    <form  onSubmit={this.handleSubmit} className="login-form-container">
                    <section className="row justify-content-center">
                       
                        <img className="img-logo img-fluid w-25 h-25" src={websitelogo}   alt="Avatar"/>
                       
                     
                      </section>  
                      <h6 className="title">KyuQuiz</h6>
                        <div className="form-group">
                        
                        <h3 className="HeadTitle">SignUp</h3>
                         
                            <FormInput 
                             type="text"
                              name="firstName"
                              onChange={this.handleChange} 
                              value={this.state.firstName}
                              id="exampleInputPassword1"
                              placeholder="FirstName"
                              />
                          
                             <FormInput 
                             type="text" 
                             name="lastName"  
                             onChange={this.handleChange} 
                             value={this.state.lastName} 
                              id="exampleInputPassword1" 
                              placeholder="LastName" 
                              />
                           
                            <FormEmail value={this.state.value} onChange={this.handleChange} />

                            
                            <FormInput type="password" name="Password"  onChange={this.handleChange} value={this.state.Password} id="exampleInputPassword1" placeholder="Password" />
                            {/* <input type="password" className="form-control mb-3" id="exampleInputPassword1" required placeholder="Confirm Password" /> */}
                            <FormInput type="password" name="confirm_password"  onChange={this.handleChange} value={this.state.confirm_password} id="exampleInputPassword1" placeholder="Confirm Password" />
                            < small id="emailHelp" className="form-text text-danger mb-3 text-justify small-font">{this.state.message}</small>
                            <select name="roles"  onChange={this.handleChange} className="form-control mb-3" id="exampleFormControlSelect1" required placeholder="Role">
                            <option  disabled selected hidden>Role</option>
                            <option value='trainee'>Trainee</option>
                            <option value='trainer'>Trainer</option>                            
                            </select>
                        </div>
                        <div className="form-group">

                           <ButttonSign text="SignUp" />
                            
                          <Link to="/"><button className="btn btn-link btn-block" style={{fontSize:"90%"}}>Already have account?</button></Link>
                        </div>
                       
                    </form>
                </section>
            </section>
        </div></div>

           )
    }
}


function mapStateToProps(state){
    return{
       data1 : state.signup.data
    }
}

function mapDispatchToProps(dispatch){
    return{ action : bindActionCreators(SignupAction,dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);