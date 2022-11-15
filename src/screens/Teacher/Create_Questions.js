import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Teacher_questions from '../../Components/Teacher_questions';
function Create_Questions(){ 
return (<>
<Navbar/>
<Teacher_questions />
<FooterContainer />
</>);
}
export default Create_Questions;
