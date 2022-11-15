import React from 'react'
import questions from '../../static_data/questions';
import ListComp from '../../Components/Assign_stu_list';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/FooterContainer';
class Edit extends React.Component{

    callAPI(_id)
    {
       console.log("heyyy..."+JSON.stringify(_id))
    }

    render()
    {  
        var quiz = this.props.history.location.state.tech
        var ques = quiz.questions

        const quesComponent = ques.map((question) =>{
            return(
              <><Link to={{ 
                  pathname:'/edit_question' , 
                  state:{
                      question : question,
                      quizid : quiz._id
                      }}}> 
             {/* <ListComp key={question._id} title={question.question} onClick={()=>this.callAPI(question)} aria-label="Close" /> */}
             <span key={question._id}>  
        {/* <li className=" list-group-item list-group-item-primary p-1 m-2" style={{fontSize:"20px",backgroundColor:"#00BFFF",color:"white",fontWeight:"bold"}}>{question.question} */}
        <li className=" list-group-item list-group-item-primary p-1 m-2" style={{fontSize:"20px",backgroundColor:"#6d00bd",color:"white",fontWeight:"bold"}}>{question.question}
        <button type="button" className="close" onClick={()=>this.callAPI(question)} aria-label="Close">
        <span aria-hidden="true" style={{color:"white"}}>&times;</span></button>
        </li></span>
             </Link></>) 
            });
            

        return(
        <div>
         <Navbar/> 
         <div className="wrapper">
 	      <h1 className="">Edit Questions</h1>
       </div>
            <div className="row mt-5 mt-md-2">
                <div className="mx-auto"  style={{borderWidth:"10px",borderStyle:"groove",borderRadius:"25px",padding:"10px"}} >
                     <ul className="questionList list-group mb-2 mt-2" >
            {quesComponent}
            </ul> 
                    </div>
                </div>
            {/* <ul className="list-group mb-2 mt-2">
            {quesComponent}
            </ul>  */}
             {/* <div className="result-box custom-box">
        <h1> Quiz Result</h1>
        
         <h3> { remark(this.state.report_data.percentage)}</h3>
        <div className="container outside-table mt-3" style={{border:"10px double white",borderRadius:"25px"}}>
       
        <table className="custom-table"> 
             <tr >
                <td>Quiz Name</td>
                <td><span className="total-question">{this.props.data.quizname}</span></td>
            </tr >
            <tr >
                <td>Category</td>
                <td><span className="total-question">{this.props.data.category}</span></td>
            </tr>  */}
<Footer/>
        </div>)
    }
}

export default Edit ;