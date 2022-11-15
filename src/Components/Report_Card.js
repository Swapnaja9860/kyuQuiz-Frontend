import React from 'react';
import quizdetails from '../static_data/quizdetails';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import Navbar from './Navbar';

class Report_Card extends React.Component{

    constructor(props){
        super(props);
      this.state={
            report_data : null}
      
   }
    
    componentWillMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.accessToken)
        //var id = "5fec1ba830348724cc358650";
        //var id = "5ff565dc9139262ac4e26367";
        //id = JSON.stringify(id)
         fetch('http://localhost:3000/api/quizReport/get/'+this.props.data._id,{
           method : 'GET',
           headers : {
                      'Content-type' : 'application/json',
                      'Accept': 'application/json',
                       'x-access-token': user.accessToken 
                      }
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
       .then(data => {//console.log(data)
                console.log("this is",data)
                this.setState({report_data : data[0]})
       })
       .catch(error => {
           alert(error);
           //window.location.reload();
       })         
    }
   
    render()
    {   
        function remark(percentage)
        {let remark;
        let scores= percentage*100
         if(scores<=30){
             remark="You need more practice";
             //console.log(remark)
         }else if(scores>=30 && scores<=50){
             remark="Better luck next time!";
         }else if(scores>=51 && scores<=70){
             remark="You can do better";
         }else if(scores>=71 && scores<=84){
             remark="You did great";
         }else{
             remark="You are an absolute genius"
         }
         return remark;
        }
        return(
            
            // this.setState({info: data});
        <div>{this.state.report_data ?       
        <div className="report-bg">
            { console.log(this.props.data) }
    <div className="result-box custom-box">
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
            </tr> 
             <tr >
                <td>Total Questions</td>
                <td><span className="total-question">{this.props.data.questions.length}</span></td>
            </tr> 
            <tr>
                <td>Attempts</td>
                <td><span className="total-question">{this.state.report_data.attemptedQuestion}</span></td>
            </tr>
            <tr>
                <td>Correct</td>
                <td><span className="total-question">{this.state.report_data.correctQuestion}</span></td>
            </tr>
            <tr >
                <td>Wrong</td>
                <td><span className="total-question">{this.state.report_data.attemptedQuestion-this.state.report_data.correctQuestion}</span></td>
            </tr>
            <tr>
                <td>Percentage</td>
                <td><span className="total-question">{this.state.report_data.percentage * 100}</span></td>
            </tr>
        </table>
        </div>
        <Link to ="/home">
            <Button  className="mt-3" style={{backgroundColor:"#191970"}}>Back to Home</Button>
          </Link>
          {/* <Link to ="/Student_categories">
            <Button className="mt-3" style={{backgroundColor:"#191970"}}>Take a quiz</Button>
          </Link> */}
          
        
    </div></div>
    : console.log("...wait.it will work")}</div>
     
        )
}



// function Report_Card(props){
//     const {name,category,no_of_ques,attempt,score} = quizdetails[0];
//    let remark;
//    let scores=(score/no_of_ques)*100
//     if(scores<=30){
//         remark="You need more practice";
//     }else if(scores>=30 && scores<=50){
//         remark="Better luck next time!";
//     }else if(scores>=51 && scores<=70){
//         remark="You can do better";
//     }else if(scores>=71 && scores<=84){
//         remark="You did great";
//     }else{
//         remark="You are an absolute genius"
//     }
   
//return (<></>
//  );
// }
}
export default Report_Card;