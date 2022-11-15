import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import Navbar from '../../Components/Navbar';
import {history} from '../../redux/helper/history'

import Footer from '../../Components/FooterContainer';
import websitelogo from '../../Logo1.png';
import { Card } from 'react-bootstrap';


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import {Collapse} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import QuiznameAction from '../../redux/actions/quiznameAction';
import { connect } from 'react-redux';

import Edit_questions from '../../Components/edit_questions';
import Create_Questions from './Create_Questions';
import Teacher_questions from '../../Components/Teacher_questions';

class Quiz_Name extends React.Component{

    
  constructor(props){
    super(props);

    this.state ={
     quizname :'', 
     timeToSolve: '',
     //categoryId : 0,
     x: '',
     noOfQuestions:'',
     totalmarks:'',
     category : '',
     clicked : localStorage.getItem('items') ? true : false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
 }

//  componentDidMount(){
//      fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(res=>res.json())
//      .then(data => {//console.log(data)
//                   this.setState({category : data})
//                   console.log("this is",this.state.category)
//                  })
//  }
handleClick(e){
   localStorage.removeItem('items');
   localStorage.removeItem('currentItem');
   history.push('/teacher');
}
 handleChange(e)
 {
    if(e.target.name=='timeToSolve'){
      this.setState({x:e.target.value});
      this.setState({[e.target.name] : e.target.value*60 });
      console.log(e.target.value*60)
    }else
     this.setState({[e.target.name] : e.target.value });
 }

 handleSubmit(e)
 {
     e.preventDefault();
     const quiz_info ={
        quizname :this.state.quizname, 
        timeToSolve: this.state.timeToSolve,
        category : this.state.category,
        //noOfQuestions: this.state.noOfQuestions,
        noOfQuestions: 3,
        totalmarks: this.state.totalmarks
     }
     //console.log(quiz_info)
     this.setState({clicked : true})
    this.props.actions(quiz_info);
   
 }
    //const[open_tech,setOpen]=useState(false)
   render(){
  return (<>
  <Navbar/>
      <div className="EnrollmentPage  text-center text-white">
          

      {/* <img className="EnrollmentImage " src={websitelogo} width="150px" height="150px"  alt="Avatar"/> */}
          <form onSubmit={this.handleSubmit} className="heading container ">
            {/* <div className="container" style={{borderWidth:"5px",borderStyle:"groove",borderRadius:"25px"}}> */}
             <fieldset className="container w-sm-100 set-background" style={{width:"70%",borderWidth:"10px",borderStyle:"groove",borderRadius:"25px",padding:"10px"}}  > 
          {/* <label for ="enno" className="eid col-12 col-sm-12 col-md-12 col-lg-3 "> Enter Quiz Name</label> */}
         
          <label for ="enno" className="eid col-md-6 col-xl-4"> Enter Quiz Name</label>
          <input type="tel" name="quizname" value={this.state.quizname} onChange={this.handleChange} className="enno  col-md-4 col-xl-3"></input><br /><br/>
          
          <label for ="enno" className="eid col-md-6 col-xl-4"> Duration Of Quiz</label>
          <input type="tel" name="timeToSolve" value={this.state.x} onChange={this.handleChange} className="enno col-md-4 col-xl-3"></input><br /><br/>
          {/* <label for ="enno" className="eid  col-md-6 col-xl-4">No of Questions</label>
          <input type="tel" name="noOfQuestions" value={this.state.noOfQuestions} onChange={this.handleChange} className="enno  col-md-4 col-xl-3"></input><br /><br/> */}
          <label for ="enno" className="eid col-md-6 col-xl-4">Marks</label>
          <input type="tel" name="totalmarks" value={this.state.totalmarks} onChange={this.handleChange} className="enno col-md-4 col-xl-3"></input><br /><br/>
         
          <label for ="enno" className="eid col-md-6 col-xl-4"> Category</label>
    
         
          <select name="roles"  name="category" onChange={this.handleChange}  className="enno col-md-4 col-xl-3" id="exampleFormControlSelect1" required placeholder="Role">
                             <option  disabled selected hidden></option>
                            <option value='Technical'>Technical</option>
                            <option value='Non-technical'>NonTechnical</option>                            
                            </select>
          {/* <label className="radio-inline mr-5"style={{fontSize:"120%"}}><input type="radio" name="optradio" checked/>Technical</label>
<label className="radio-inline" style={{fontSize:"120%"}}><input type="radio" name="optradio"/>NonTechnical</label>
            */}
          {/* <input className="form-check-input col-sm-4 col-md-4 col-lg-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="col-sm-4 col-md-4 col-lg-3 form-check-label"style={{fontSize:"80%",marginLeft:"0%"}}  for="inlineRadio1">1</label> 
 
  
          <input className="enno form-check-input col-sm-4 col-md-4 col-lg-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="eid col-sm-4 col-md-4 col-lg-3 form-check-label"  style={{fontSize:"80%"}} for="inlineRadio2">2</label>
   */}  
             <Button type="submit" className="form-button button-enrollment btn-quiz-name" style={{backgroundColor:"white",color:"blueviolet"}}>Create</Button>              
        </fieldset>
       
{/* </div> */}
          {/* <select name="categoryId"  value={ this.state.categoryId} onChange={this.handleChange} className=" eid roles_quiz" required placeholder="Categories">
                            <option  disabled selected hidden>Categories</option>
                            <option value='0'>Technical</option>
                            <option value='1'>Non Technical</option>                            
                            </select><br/><br/> */}
        

        <br/>
                           {this.state.clicked ? <div><Edit_questions/> 
                           <br/><button type="button" className="form-button" style={{width:"180px",height:"80px"}}   onClick={this.handleClick}>Done</button></div>
                           : console.log("Create the quiz then u can add the questions") }
          {/* <Button type="submit" className="button-enrollment btn-quiz-name">Start</Button>
                            */}




         
      {/* <Link to="/create_questions"> */}
         
          {/* </Link> */}
          
          </form>        
      </div>
      <Footer/>
      </>
   );
  }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(QuiznameAction,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Quiz_Name);