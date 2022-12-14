import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute ({ component: Component, ...rest }) {
    return(<Route 
        {...rest}
        render = {
            props=> {
                if(localStorage.getItem('user')){
                    return<Component {...props} />
                }
                else
                { 
                    return(
                        <Redirect 
                          to={{
                              pathname : '/',
                              state :{
                                  from : props.location
                              } }}
                        />
                    );
                }
            }
        }
        />  
    )      
 }


 export default PrivateRoute;


