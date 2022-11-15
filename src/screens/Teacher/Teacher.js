import React from 'react';
import web from '../../images/teacher.png';
import web1 from '../../images/create.png';
import web2 from '../../images/host.png';
import web3 from '../../images/report.png';
import Navbar from '../../Components/Navbar';
import FooterContainer from '../../Components/FooterContainer';
import { NavLink } from 'react-router-dom';
const Teacher=()=>{
    return (<div className="home-page">
    <Navbar/>
    <section id="header-home" className="mt-lg-5 mb-lg-5 pt-lg-5 pb-lg-5 pt-2" >
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div  className="row text-left">
                    <div className="col-md-6 pt-0 mt-0 pt-lg-0 order-1 order-lg-1">
                    <h1>Get Intellectual with <br/><strong className="brand-name">KyuQuiz</strong></h1>
                    <h2 className="my-3">We are the team of talented developers</h2>
                    <div className="mt-3">
                    <NavLink to="quiz_name"><button className="btn-get-started bcc1"><img src={web1} alt="my image" width="50px" height="50px" />Create</button></NavLink>
                    <NavLink to="teacher_host"><button className="btn-get-started bcc2"><img src={web2} alt="my image" width="50px" height="50px"/>Host</button></NavLink>
                    <NavLink to="teacher_report"><button className="btn-get-started bcc3"><img src={web3} alt="my image" width="50px" height="50px"/>Reports</button></NavLink>
                    <NavLink to="createT"><button className="btn-get-started bcc4"><img src={web3} alt="my image" width="50px" height="50px"/>Create Team</button></NavLink>
                    <NavLink to="teacher_create"><button className="btn-get-started bcc4"><img src={web1} alt="my image" width="50px" height="50px"/>Edit</button></NavLink>
                    </div>
                    </div>

                    <div className="col-lg-6 order-2 pt-5 pt-lg-0 order-lg-2 header-img-home">
                        <img src={web} className="home-img animated" alt="home img"/>

                    </div>
                    </div>
                </div>
        </div>
    
    </section>
    <FooterContainer/>
    </div>);
};

export default Teacher;