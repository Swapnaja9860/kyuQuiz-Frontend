import React, {useEffect, useState } from 'react';
import {Progress, Button} from 'reactstrap';
import DisplayQuestions from '../../Components/DisplayQuestions';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
//import questions from '../../static_data/questions';
import logo from "./../../images/time.gif";

const USER_SERVICE_URL = 'http://localhost:3000/api/quiz';

// function postData(opts){
// console.log('parameteres passed',opts);



// }


function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

function randomShuffle(q)
{
  for(let i=q.length-1 ; i>0 ; i--)
  {
    let ind=Math.floor(Math.random()*(i+1));
    let temp=q[i];
    q[i]=q[ind];
    q[ind]=temp;
  }
  return q;
}

function Timer(props)
{
const {time} = props;
return (

  <div className='time-container'>
    <div className='text-center'>
      {time===0
      ?"Time's up"
      :<><h4 className="time-remaining">
        <span id="iTimeShow">Time Remaining: </span><br/><img src={logo} width="80px"height="50px"/><span className='timer'>{formatTimeLeft(time)}</span></h4></>  }
      </div>
  </div>
);
}



function Quiz(props) {
  const [time, setTime] = useState(props.history.location.state.assignedQuiz.timeToSolve); // time remaining;
  const [active, setActive] = useState(true); // sate of the quiz;
  const [problems, setProblems] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([[], [], [], [],[],[],[]]);
  const [selectedRadio, setSelectedRadio] = useState([null, null, null,null,null,null,null]);
  const [data, setData] = useState({users: [], isFetching: false});
  const [quizName, setQuizName] = useState(null);
  const [id_key,setid_key]=useState(0);
  const [totalquestion,setTotalQuestion]=useState(0);

 // console.log("abc",props.history.location.state);
// program to extract value as an array from an array of objects

function compareArrays(arr1, arr2) {

  // check the length
  if(arr1.length != arr2.length) {
      return false;
  } 
  else { 
      let result = false;
      
      // comparing each element of array 
      for(let i=0; i<arr1.length; i++) {

          if(arr1[i] != arr2[i]) {
              return false;
          }
          else {
              result = true;
          }

      }
      return result;
      
}

}



  const finishQuiz = ()=>
  {
      setActive(false);
      let arr=[];
      let score=0;
      let attempt=0;
      let marks=0;
      let totalmarks=0;
      for(let i=0; i<problems.length; i++)
      {
          totalmarks+=props.history.location.state.assignedQuiz.totalmarks;
        {
          if(problems[i].isMultiSelect==true){
            console.log(problems[i].answers);
            console.log(selected[i]);
            if(compareArrays(problems[i].answers,selected[i]))
               { score+=1;
                marks+=props.history.location.state.assignedQuiz.totalmarks;}
            if(selected[i].length!=0)
                attempt+=1; 
              }
           else{
            if(problems[i].answers[0]==selectedRadio[i])
              {score+=1;
              marks+=props.history.location.state.assignedQuiz.totalmarks;}
            if(selectedRadio[i]!=null)
              attempt+=1;  
            }
         
          }
      }

      let user = JSON.parse(localStorage.getItem('user'))

      var opts={    }
      opts.quizInfoId=props.history.location.state.assignedQuiz._id;
      // opts.categories=props.history.location.state.assignedQuiz.category;
      // opts.totalquestion=problems.length;
      opts.attemptedQuestion= attempt;
      opts.correctQuestion=score;
      // opts.wrong=problems.length-score;
      // opts.marks=marks;
      opts.percentage=score/problems.length;

      // console.log("report",opts);


      console.log(user.accessToken)
      fetch("http://localhost:3000/api/quizReport/store",{
        method : 'POST',
        headers : {
                   'Content-type' : 'application/json',
                   'Accept': 'application/json',
                    'x-access-token': user.accessToken 
                   },
        body : JSON.stringify(opts)
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
       console.log("succesfful report this is request data",data);
    })
    .catch(error => {
         alert(error);
    })         


      alert('Congrats! Your score is '+marks+" out of "+totalmarks);
      
      
      

  }

  const setUsersChoiceRadio = (index, choice) =>
  {
    let t=selectedRadio;
    t[index]=choice;
    setSelectedRadio(t);
    
  }

  const setUsersChoice = (index, choice) =>
  {
    let t=selected;

   
      t[index][choice-1]=choice;
    setSelected(t);
  }

  useEffect(() => {

      if (time === 0) {
      finishQuiz();
    }
    if(active&&time!==0)
    {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    }
  }, [time]);

  useEffect(() => {
    console.log('asss',props.history.location.state.assignedQuiz.questions);
  
  }, []);


  useEffect(() => {
        try {
            //setData({users: response.data[0].questions, isFetching: false});
            setProblems(randomShuffle(props.history.location.state.assignedQuiz.questions));
            // setTime(props.history.location.state.assignedQuiz.timeToSolve);
            setQuizName(props.history.location.state.assignedQuiz.quizname);
            setTotalQuestion(props.history.location.state.assignedQuiz.length);
        } catch (e) {
            console.log(e);
           
        }
    
}, []);



  return (<div className="quiz-background">

   {!active ? (<>
        <Navbar/> </>
        
      ) : (
        ''
      )}
      
    <div className="quiz-box">
      <div className='row '>
        {console.log(totalquestion)}
      <Progress value={current*100/(totalquestion-1)} color="danger"/>
      <br />
        <div className='text-center col-lg-12 col-12'>
         
        <div><br/>  <Progress value={current*100/(totalquestion-1)} color="danger"/> <br /> <br /></div> 
          <Timer time={time} />

          {problems ? (
           (problems[current].isMultiSelect==false) ? ( 
           <DisplayQuestions
            index={current}
            problem={!problems ? null : problems[current]}
            active={active}
            userChoice={selectedRadio[current]}
            setUsersChoice={setUsersChoiceRadio}   
            namequiz={quizName}    
            tech = {props.history.location.state.assignedQuiz}   
          /> 
        
      ) : (
        <DisplayQuestions
            index={current}
            problem={!problems ? null : problems[current]}
            active={active}
            userChoice={selected[current]}
            setUsersChoice={setUsersChoice}
            namequiz={quizName}   
            tech ={props.history.location.state.assignedQuiz}         
          />
      )
        
      ) : (
        ''
      )}
          
        
           <div className="button-container button-container-game-quiz mt-lg-2 mx-lg-auto mb-lg-$sm;">
          {current !== 0 ? (
            <>
              <Button
                onClick={() => {
                  setCurrent(current - 1);
                }}
              >
                Previous
              </Button>{' '}
            </>
          ) : (
            ''
          )}
          {/* totalquestion-1 */}
          {current !== totalquestion-1 ? (
            <>
              <Button
                onClick={() => {
                  setCurrent(current + 1);
                }}
              >
                Next
              </Button>{' '}
            </>
          ) : (
            ''
          )}
          {
            active?
            <>
              <Button
                onClick={() => {
                  finishQuiz();
                }}
              >
                Submit
              </Button>{' '}
            </>
            :""
          }</div>
        </div>
      </div>
    </div> {!active ? (<>
        <FooterContainer/> </>
        
      ) : (
        ''
      )}</div>
  );
}
export default Quiz;