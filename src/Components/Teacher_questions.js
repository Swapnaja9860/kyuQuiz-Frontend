import React from 'react';
import { Link } from 'react-router-dom';
import {Spinner,Label, Input, Alert} from 'reactstrap';
import QuiznameAction from '../redux/actions/quiznameAction';
import {connect} from 'react-redux'
import questions from '../static_data/questions';
import QuizinfoReducer from '../redux/reducer/trainer/quizinfoReducer';
import { bindActionCreators } from 'redux';
import QuizinfoAction from '../redux/actions/createquizAction';
import {history} from '../redux/helper/history'

class Teacher_questions extends React.Component
{

  constructor(props){
    super(props);
   
    this.state = {
          options :[],
          answers :[],
          question : "",
          isMultiSelect : false,
          explaination : '',
          marks : 10,
    }
   
    // //this.props.history.location.state.question
    // this.state = {
    //   options :  this.props.question.options,
    //   answers :  this.props.question.answers,
    //   question :  this.props.question.question,
    //   isMultiSelect : false,
    //   explaination :  this.props.question.explaination,
    //   marks :  this.props.question.marks,


    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    //this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleChangeCorrect = this.handleChangeCorrect.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleChangeCorrect = this.handleChangeCorrect.bind(this);
  }

  handleChange(e)
    { 
      this.setState({[e.target.name] : e.target.value });
      // let question = this.state.questions.question; 
      // question = e.target.value;
      // this.setState({question : questions})
      // //this.setState({questions['question'] : [...this.state.questions.question , ...questions['question']]});
      console.log(this.state)
      //  console.log(e.target.value) 
     // console.log("quiz_info",this.props.quiz_info)
    }

    handleChangeCorrect(e)
    {  
     
     this.setState({answers:e.target.value.split(',')});
     if(e.target.value.split(',').length==1)
        this.setState({isMultiSelect:false})
      else
        this.setState({isMultiSelect:true})
      console.log(this.state.answers);
      console.log(this.state.isMultiSelect);
    }

    handleChangeOption(e)
    { 
       let copies = this.state.options;
       //let copies = [];
       if(e.target.name=='option1'){
        copies[0]=e.target.value;
       }else if(e.target.name=='option2'){
         copies[1]=e.target.value;
       }else if(e.target.name=='option3'){
         copies[2]=e.target.value;
       }else{
         copies[3]=e.target.value;
       }
    //   copies.push(e.target.value)
      // copies.push(e.target.value)
      // this.setState(copies);
      // questions['options'] = [];
      // questions['options'].push(e.target.value);
      this.setState({options : copies});
      console.log(this.state.options)
    }
    // handleChangeAnswer(e)
    // {
    //   let copies = this.state.answers;
    //    //let copies = [];
    //    copies.push(e.target.value)
    //   this.setState({answers: copies});
    //   console.log(this.state.answers)
    // }

    
   handleDone(e)
   {
    let user = JSON.parse(localStorage.getItem('user'))
     const quiz_info ={
      quizid : this.props.quiz_info._id,
      question: this.state.question, 
      options: this.state.options,
      answers: this.state.answers,
      isMultiSelect:this.state.isMultiSelect,
      explanation: this.state.explaination,
      marks: this.state.marks ,
      
      //categoryId: this.props.quiz_info.categoryId,
      //categoryId : "5fe587545c05a93588284623",
      //quizname : this.props.quiz_info.quizname,
      //creatorId: user.id,
      //noOfQuestions:5,
      //totalmarks:20,
      //timeToSolve: this.props.quiz_info.timeToSolve,
     }
     console.log(" i am done" , quiz_info);
    
      console.log(user.accessToken)
       fetch("http://localhost:3000/api/questions/store",{
         method : 'POST',
         headers : {
                    'Content-type' : 'application/json',
                    'Accept': 'application/json',
                     'x-access-token': user.accessToken 
                    },
         body : JSON.stringify(quiz_info)
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
        console.log("this is request data",data);
        history.push('/quiz_name')
     })
     .catch(error => {
         alert(error);
         //window.location.reload();
     })         
     
     //this.props.action(quiz_info);
   }

  render(){
  return (
    <>
     <div className="questions m-5">
                    <h2 className="sign">Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p className="quiz-p">
                            <span  className="mdi mdi-set-center mdi-24px lifeline-icon">
                                <span className="lifeline">2</span>
                            </span>
                        </p>
                        <p className="quiz-p">
                            <span  className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                                <span className="lifeline">2</span>
                            </span>
                        </p>
                    </div>
      <div className='row '>
       <div className="col-12 col-sm-12 col-md-12 col-lg-12"> 
        <div className='text-center '>
          <h3><Input type="text" name="question" value={this.state.question} onChange={this.handleChange} placeholder="Enter Question here"/></h3>
        </div>
      </div>
     
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
     
        <div className="d-lg-inline-block col-lg-6" >
         
        <p className="option quiz-p"><Input type="text"  name="option1" default value={null} onBlur={this.handleChangeOption} className="teacher_option" placeholder="Option 1" /></p>
                        <p  className="option quiz-p"><Input  name="option2" default value={null} onBlur={this.handleChangeOption} className="teacher_option" type="text" placeholder="Option 2"/></p>
                    </div>
                    <div className="d-lg-inline-block col-lg-6">
                        <p  className="option quiz-p"><Input className="teacher_option" name='option3' type="text" default value={null} onBlur={this.handleChangeOption} placeholder="Option 3"/></p>
                        <p  className="option quiz-p"><Input className="teacher_option" name='option4' type="text" default value={null} onBlur={this.handleChangeOption} placeholder="Option 4"/></p>
                    </div>
     </div></div>
      <>
        <Alert color='info'>


          
          <b> Correct answer: </b> <Input type="text" name="answers" default value={null} onChange={this.handleChangeCorrect} placeholder="Correct Answere"/>

          <br />
          <b> Description: </b> <Input type="text" name="explaination" value={this.state.explaination} onChange={this.handleChange} placeholder="Description"/>
        </Alert><br/> </>

        <div className="text-center button-container">
                        {/* <Link to='/quiz_name'><button className="mb-3">
                            Add
                        </button></Link> */}
                        {/* <button className="mb-3">
                                Preview
                            </button> */}
                        <button className="mb-3" onClick={this.handleDone}>Done</button>
                    </div>
    </div>
    

    </>
  );
}
}

function mapStateToProps(state){
  return{
    quiz_info : state.quizname.quiz_name
  }
}
function mapDispatchToProps(dispatch){
  return{
    action : bindActionCreators(QuizinfoAction,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Teacher_questions);