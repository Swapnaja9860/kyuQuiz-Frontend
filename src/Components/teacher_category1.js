import React, { useState } from'react';

import {Button} from 'react-bootstrap';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import {Collapse} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

//import Technical from '../static_data/Technical';

//import Non_technical from '../static_data/Non_technical';

class Category extends React.Component
{
//  const title=props;


  //const[open_tech,setOpen]=useState(true)
  //const[open_nontech,setOpen_n]=useState(false)

  constructor(props)
  {
     super(props);
     this.state = {
       open_tech : true,
       open_nontech : false,
       Technical : [],
       Non_technical : []
     }

  }
  handleClick(id){
    let user = JSON.parse(localStorage.getItem('user'));
    const quiz_info = {
       quizid : id
    }
    console.log(user.accessToken)
     fetch("http://localhost:3000/api/hostquiz/host",{
       method : 'POST',
       headers : {
                  'Content-type' : 'application/json',
                  'Accept': 'application/json',
                   'x-access-token': user.accessToken 
                  },
       body : JSON.stringify(quiz_info)
   })
      .then(response => {
           return response.json()
          .then(json => {
           if(response.ok){
           return json;
           }
           else{
               throw Error(json.message);
           }})
           })
      .then(data_list => {
                  console.log("Host quiz"+JSON.stringify(data_list));
           })
        .catch(error => {
        alert(error);
       //window.location.reload();
        })         

  }
  componentWillMount(){
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.accessToken)
     fetch("http://localhost:3000/api/myquiz",{
       method : 'GET',
       headers : {
                  'Content-type' : 'application/json',
                  'Accept': 'application/json',
                   'x-access-token': user.accessToken 
                  }
   })
   .then(response => {
       return response.json()
       .then(json => {
           if(response.ok){
           return json;
           }
           else{
               throw Error(json.message);
           }})
   })
   .then(data_list => {//console.log(data)
                  // this.setState({stored_email : data})
                  // console.log("this is",this.state.stored_email)
                  //if (data.Category){}
                  data_list.map(data => {
                     if(data.isHosted){
                     if(data.category == "Technical")
                     {
                        let tech = this.state.Technical;
                        tech.push(data);
                        this.setState({Technical: tech})
                     }
                     else
                     {
                        let non_tech = this.state.Non_technical;
                        non_tech.push(data);
                        this.setState({Non_technical: non_tech})
                     }
                    }
                  })
                  console.log(data_list);
   })
   .catch(error => {
       alert(error);
       //window.location.reload();
   })         
}
  render(){  
  return(<>

    <div className="card-cat">
  {/* <div class="sign">
    <span class="sign__word">ASSIGNED QUIZ</span>
      </div><br/>
     */}

<div className="wrapper mb-5 mb-lg-0">
 	      <h1>{this.props.title}</h1>
       </div><br/>
    <Card.Body>

    <Card.Title > <h2 className="title">{this.state.open_tech && <ExpandLessIcon onClick={()=> this.setState({open_tech :!this.state.open_tech})}
      // <h2 className="title">{open_tech && <ExpandLessIcon onClick={()=>setOpen(!open_tech)}
aria-controls="collapse"
        />}
         {/* { !open_tech && <ExpandMoreIcon onClick={()=>setOpen(!open_tech)} aria-controls="collapse"  */}
          { !this.state.open_tech && <ExpandMoreIcon onClick={()=>this.setState({open_tech :!this.state.open_tech})} aria-controls="collapse" 
                />
              }
        &nbsp;&nbsp;&nbsp;Technical Quiz</h2></Card.Title>
  </Card.Body>
     
     
      <Collapse in={this.state.open_tech}>
    <div id="collapse">
    <div class="row-cat">
 
    {this.state.Technical.map((tech)=>{
                   return <div className="col-sm-3 pb-4 pb-lg-3"><Card bg="primary" text="white" className="card1"><Card.Body>
                       <Card.Title>{`Name: `+`${tech.quizname}`}</Card.Title> 
                             <Card.Title>{`Marks : `+`${tech.totalmarks}`}</Card.Title>
                             <Card.Title>{`Duration : `+`${Math.floor(tech.timeToSolve/60)}`+`:`+`${tech.timeToSolve%60}`}</Card.Title>
                          </Card.Body>
                          <div id="outer">
                           <Link to={{
                            pathname: this.props.link,
                            state: {
                               tech
                            }
                           }}>  
                           <Button className="inner btn-warning">{this.props.display}</Button></Link>
                           {this.props.title == "HOST QUIZ" ? 
                            <Button className="inner btn-warning" onClick={()=>this.handleClick(tech._id)}>Host</Button> :
                           console.log("..loading")}    
                          </div>
                           </Card>
                           
                           </div>
                   })}
 
  </div>



      </div>
      </Collapse>
    
  

      <Card.Body>
      

      <Card.Title >
        {/* <h2>{open_nontech && <ExpandLessIcon onClick={()=>setOpen_n(!open_nontech)}
  aria-controls="collapse"
          />} { !open_nontech && <ExpandMoreIcon onClick={()=>setOpen_n(!open_nontech)} 
          aria-controls="collapse" 
                  />
                } */}
           <h2>{this.state.open_nontech && <ExpandLessIcon onClick={() => this.setState({open_nontech :!this.state.open_nontech})}
                aria-controls="collapse"
          />} { !this.state.open_nontech && <ExpandMoreIcon onClick={() => this.setState({open_nontech :!this.state.open_nontech})} 
          aria-controls="collapse" 
                  />
                }
          &nbsp;&nbsp; Non Technical Quiz</h2></Card.Title>
    </Card.Body>
       
       
        <Collapse in={this.state.open_nontech}>
      <div id="collapse">
      <div class="row-cat">
   
      {this.state.Non_technical.map((tech)=>{
                     return <div className="col-sm-3 pb-4 pb-lg-3"><Card bg="primary" text="white" className="card1"><Card.Body>
                       {/* <Card.Title>{`${tech.quiz}`}</Card.Title> */}
                       <Card.Title>{`Name: `+`${tech.quizname}`}</Card.Title> 
                              <Card.Title>{`Marks : `+`${tech.totalmarks}`}</Card.Title>
                             <Card.Title>{`Duration : `+`${Math.floor(tech.timeToSolve/60)}`+`:`+`${tech.timeToSolve%60}`}</Card.Title>
                           </Card.Body>
                           <div id="outer">
                             <Link to={{
                            pathname: this.props.link,
                            state: {
                               tech
                            }
                           }}><Button className="inner btn-warning">{this.props.display}</Button></Link>
                           {this.props.title == "HOST QUIZ" ? 
                           <Button className="inner btn-warning" onClick={()=>this.handleClick(tech._id)}>Host</Button> :
                           console.log("..loading")}  
                            </div>
                            </Card></div>
                     })}
   
    </div>
  
        </div>
        </Collapse>


        </div>
   </> )
}
}
export default Category;