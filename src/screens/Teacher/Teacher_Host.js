import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Category from '../../Components/teacher_category';
function Teacher_Host(){
   
return (<>
<Navbar/>
<Category title="HOST QUIZ" link="/assignStudent" display="Assign QUIZ"/>
<FooterContainer />
</>
);
}
export default Teacher_Host;