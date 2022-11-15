import React, { useState } from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import Category from '../../Components/Category';
function Student_categories(){
   
return (<>
<Navbar/>
<Category title="ASSIGNED QUIZ" link="/enrollment" display="PLAY QUIZ"/>
<FooterContainer />
</>
);
}
export default Student_categories;