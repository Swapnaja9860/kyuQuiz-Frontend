import React, { Component, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import MyButton from './MyButton';

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
function Popup(props) {        
    console.log('jjj',props.state);
    const [assignedQuiz,setAssigneQuiz]=useState(null);
    useEffect(() => {
        //    console.log(props);
          setAssigneQuiz(props.state);
            
            
         }, []);
        return (
            <Fade delay={500}>
                <div className="popup-container" >
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>Welcome to Kyu Quiz</h1>
                                <p className="quiz-p">Quiz Name: {props.state.quizname} <br /><br /></p>
                                <p className="quiz-p"> <h3>Total Questions: {props.state.questions.length}</h3></p>
                                <p className="quiz-p"><h3>Duration: {formatTimeLeft(props.state.timeToSolve)}</h3><br/><br/></p>
                                <span >
                               <Link to={{
                pathname: '/quiz',
                state: {
                   assignedQuiz
                }
                }} ><MyButton
                                       // component="I am sourabh"
                                        //link="/quiz"
                                        text="Start the quiz"
                                        bck=' linear-gradient(
                                            90deg,
                                            rgb(110, 94, 254) 0%,
                                            rgba(73, 63, 251, 1) 100%
                                          )'
                                        color='#fff'
                                    /></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }


export default Popup; 

