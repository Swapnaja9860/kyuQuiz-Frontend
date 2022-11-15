import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import web1 from '../../images/create.png';
import Category from '../../Components/teacher_category';
import { Link } from 'react-router-dom';
function Teacher_Create(){
   
return (<>
<Navbar/>
<Link to="quiz_name"><button className="btn-teacher-create bcc4"><img src={web1} alt="my image" width="50px" height="50px"/>Create Quiz</button></Link>
<Category title="EDIT QUIZ" link="/edit" display="EDIT QUIZ"/>
<FooterContainer />
</>
);
}
export default Teacher_Create;