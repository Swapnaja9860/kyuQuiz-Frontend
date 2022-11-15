import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Teacher_questions from '../../Components/Teacher_edit_questions';
function Edit_Questions(props){ 
return (<>
<Navbar/>
<Teacher_questions question={props.history.location.state.question} quizid={props.history.location.state.quizid}/>
<FooterContainer />
</>);
}
export default Edit_Questions;
