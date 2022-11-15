import './App.css';
import LoginForm from './screens/auth/loginForm';
import SignUp from './screens/auth/signupForm';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './redux/helper/history';
import PrivateRoute from './redux/helper/privateRoute';
import Assign from './screens/Teacher/Assign';
import CreateTeam from './screens/Teacher/createTeam';
import Teacher_questions from './Components/Teacher_questions';
import  edit_questions from './Components/edit_questions';



 import '@mdi/font/css/materialdesignicons.min.css';
 //import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Quiz from './screens/Student/Quiz';
import Home from './screens/Student/Home';
import ReportStudent from './screens/Student/Report_Studet';
import Enrollment from './screens/Student/Enrollment';
// import Card1 from './Components/Card1';
import Teacher from './screens/Teacher/Teacher';

import Student_Categories from './screens/Student/Student_categories';
import Student_Report from './screens/Student/Student_Report';
import FooterContainer from './Components/FooterContainer';

import OurPartners from './Components/OurPartners';
import Testimonials_screen from './Components/Testimonial_screen';
import Category from './Components/Category';

import Teacher_Create from './screens/Teacher/Teacher_Create';
import Teacher_Host from './screens/Teacher/Teacher_Host';
import Teacher_Report from './screens/Teacher/Teacher_Report';
import Quiz_Name from './screens/Teacher/Quiz_Name';
import Quiz_Page from './screens/Student/Quiz_Page';
import Leaderboard from './Components/Leaderboard';
import Create_Questions from './screens/Teacher/Create_Questions';

import Charts from './Components/Charts';

import Forgot_Password from './Components/forgot_password';
import CustomChatbot from './Components/CustomChatbot';

import Edit from './screens/Teacher/Teacher_edit';
import Edit_Questions from './screens/Teacher/Edit_Questions';
import Leaderboard_API from './screens/Teacher/leaderboard_api';

function App() {
  return (
    <>
    <Router history={history}>
    <Switch>

    <Route exact path="/" component={LoginForm} />
     <PrivateRoute path="/home" component={Home}/>


        <Route path="/student_categories" component={Student_Categories}/>
        
        <Route path="/forgot_pass" component={Forgot_Password}/>
        
        <Route path="/edit_questions" component={edit_questions}/>
        <Route path="/teacher_question" component={Teacher_questions}/>
        <Route path="/quiz_name" component={Quiz_Name}/>
        {/* <Route path="/leaderboard" component={Leaderboard}/> */}
        <Route path="/leaderboard_api" component={Leaderboard_API}/>
        
        <Route path="/create_questions" component={Create_Questions}/>
        <Route path="/assignStudent" component={Assign} />
        <Route path="/quiz_page" component={Quiz_Page}/>
        <Route path="/teacher_create" component={Teacher_Create}/>
        <Route path="/teacher_host" component={Teacher_Host}/>

        <Route path="/teacher_report" component={Teacher_Report}/>        
        <Route path="/student_report" component={Student_Report}/>
        <Route path="/categories" component={Category}/>
         <Route path="/testimonials" component={Testimonials_screen}/>
        <Route path="/our_partners" component={OurPartners}/>
        <Route path="/register" component={SignUp} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/footer" component={FooterContainer} />
        <Route path="/report_student" component={ReportStudent} />
        <Route path="/enrollment" component={Enrollment} />
        <PrivateRoute path="/teacher" component={Teacher} />

        
        <Route path='/edit' component={Edit} />
       <Route path='/edit_question' component={Edit_Questions} />
        <Route path="/createT" component={CreateTeam} />
        <Route path="/charts" component={Charts} />
    </Switch> 
    </Router>
    
    <CustomChatbot /></>
   
   );
}

export default App;



