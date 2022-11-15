import React from 'react';
import Navbar from '../../Components/Navbar';
import Assigned_student from './Assigned_student';
import Popup from '../../Components/tryPopup';
import MyButton from '../../Components/MyButton';
import ButttonSign from '../../Components/button_signin_up';
import {history} from '../../redux/helper/history';


class CreateTeam extends React.Component{
 
  constructor(){
       super();
      this.state={

          addteamname:""};
          this.takeval=this.takeval.bind(this);
          this. handleDone=this. handleDone.bind(this);
          this.Assigned_studentElement=React.createRef();
  }
  takeval(e){
     this.setState({addteamname:e.target.value})
     console.log(this.state.addteamname);
  }
  handleDone(list,teamname){
     console.log(this.props.location.pathname)
    const allids= list.map((items)=>{return items.id});
      console.log(allids);
      console.log(teamname);
      // sessionStorage.setItem('createdtemaillist',JSON.stringify(allids));
      // sessionStorage.setItem('createdteamname',JSON.stringify(teamname));
      console.log("in done"+list,teamname);
      const team = {
         group_name : teamname,
         trainee_list : allids 
      }
      let user = JSON.parse(localStorage.getItem('user'));
      console.log(user.accessToken)
       fetch("http://localhost:3000/api/groups/store",{
         method : 'POST',
         headers : {
                    'Content-type' : 'application/json',
                    'Accept': 'application/json',
                     'x-access-token': user.accessToken 
                    },
         body : JSON.stringify(team)
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
     .then(data => {
          console.log("this is request data",data)
          history.goBack()
         // console.log(this.props.location)
     })
     .catch(error => {
         alert(error);
         //window.location.reload();
     })         
  }

          render()
         { 
          document.body.style.background = "url('https://img.freepik.com/free-vector/gradient-geometric-background_52683-54199.jpg?size=626&ext=jpg&ga=GA1.2.1060402833.1609857858') " ;
          document.body.style.backgroundSize="cover";
          let sendteam=this.state.addteamname; 
    return<div>
   <Navbar/>
  
   
   <h4 className="team-heading">Create New Team</h4>
   {/* <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
   <label>Team Name:</label><br/>
   <div class="input-group">
   <input  className="form-control" type="text" placeholder="Name Your Team"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Enter</button>
  </div>
</div>
</div> */}
    <br/>

    {/* <div className="left-alignment">
    <div className="col-11 col-sm-8 col-md-8 col-lg-6 col-xl-4 pb-0">
    <label>Team Name:</label><br/>
       <input  className="form-control" type="text"  onChange={this.takeval} value={this.state.val} required placeholder="Name Your Team"/><br/> */}

    <div className="left-alignment" >
    <div className="col-11 col-sm-8 col-md-8 col-lg-6 col-xl-4 pb-0 mb-5">
  <h5> <label className="font-weight-bold">Team Name:</label><br/></h5>
       <input  className="auto-input" type="text"  onChange={this.takeval} value={this.state.val} placeholder="Name Your Team"/><br/>

       {/* <label>Add Team Members:</label> */}
      </div>
      
    
    {/* <div className="left-alignment" style={{width:"60%",borderWidth:"10px",borderStyle:"groove",borderRadius:"25px",padding:"10px"}}> */}
       <Assigned_student title="Add Team Members:" ref={this.Assigned_studentElement}/> 
        
    
    </div>
    <div className="left-alignment1">

{/* <button type="submit" button="true" onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist(),sendteam)} className="btn btn-primary">Create Team</button> */}

<button button="true" style={{fontSize:"21px"}} onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist(),sendteam)} className="btn btn-primary">Create Team</button>
</div>
    </div>
}
}
export default CreateTeam;