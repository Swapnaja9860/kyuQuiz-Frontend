import React from 'react';
import { Link } from 'react-router-dom';
import {Spinner,Label, Input, Alert} from 'reactstrap';

function DisplayQuestions(props)
{
  const {index, problem, active , setUsersChoice,userChoice,namequiz,tech} = props;
    if(!problem)
  {
    return <Spinner color='primary' />;
  }

  const {question, answers, options, marks, explanation,isMultiSelect} = problem;
  

  return (
    <>
     <div className="questions">
                    <h2 className="sign">{namequiz}</h2>
                    <div className="lifeline-container">
                        <p>
                            <span  className="mdi mdi-set-center mdi-24px lifeline-icon">
                                <span className="lifeline">2</span>
                            </span>
                        </p>
                        <p>
                            <span  className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                                <span className="lifeline">2</span>
                            </span>
                        </p>
                    </div>
      <div className='row '>
       <div className="col-12 col-sm-12 col-md-12 col-lg-12"> 
        <div className='text-center '>
          <h3>{index + 1 + '. ' + question}</h3>
        </div>
      </div>
     
    
      {options.map((option, i) => (
        <div className="d-lg-inline-block col-lg-6 " key={i.toString()} >
         
            <Label  check className="option"> 

           
      { (isMultiSelect)?(
<Input 
                type='checkbox'
                name={'checkbox' + i}
                
                checked={userChoice[i] === i + 1}
                onChange={() => {
                 
                  setUsersChoice(index, i + 1);
                  console.log("abc: "+userChoice[i]);
                }}
              />): (<Input 
                type='radio'
                name={'radio' + i}
                
                checked={userChoice === i + 1}
                onChange={() => {
                 
                  setUsersChoice(index, i + 1);
                }}
              />
              )}
            {' '}<span className="selectedOptions ">
              {option}</span>
            </Label>
         
        </div>
      ))}</div>
      {!active ? (<>
        <Alert color='info'>
          <b> Correct answer: </b> ({answers})
          <br />
          <b> Description: </b> ({explanation})
        </Alert>
        <Link to={{
                 pathname : '/report_student' , 
                   state: {
                    tech
                  }
                  
                  }}>See Report</Link> </>
        
      ) : (
        ''      
      )}</div>
    </>
  );
}
export default DisplayQuestions;