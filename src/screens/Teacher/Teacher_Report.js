import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Category from '../../Components/teacher_category1';
function Teacher_Report(props){
   
return (<>
<Navbar/>
<Category title="QUIZ REPORT"  link="/leaderboard_api" display="SEE QUIZ REPORT"/>
<FooterContainer />
</>
);
}
export default Teacher_Report;