import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Category from '../../Components/Category';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import { dom } from '@fortawesome/fontawesome-svg-core';
function Student_Report(){
   
return (<>
<Navbar/>

<Category title="QUIZ REPORT" link="/report_student" display="SEE REPORT"/>
<FooterContainer />
</>
);
}
export default Student_Report;