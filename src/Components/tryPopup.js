import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import MyButton from './MyButton';

function Popup(props) {        
    
        return (
            <Fade delay={100}>
                <div className="pop-container" >
                    <div className="container">
                        <div className="ml-5 col-md-8 col-lg-5 col-xl-4 col-sm-10">
                            <div className="pop">
                                <div className="abc">
                                <span><h4 className="tryh4">Create New Team</h4>
                                <Link to="/assignStudent" type="button" className="close float-right" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </Link></span>
                                </div>
                                <p> 
                                    <input type="text" placeholder="Name Your Team" className="border-sucess pt-2 pr-3 pl-3 pb-2"/></p>
                                    <h6></h6>
                                <span >
                                <MyButton
                                        link="/assignStudent"
                                        text="Create"
                                        bck = ' #1da1f2'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }


export default Popup; 

