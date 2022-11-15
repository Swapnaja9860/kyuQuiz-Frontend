// import React from 'react';
// import Assigned_student from './Assigned_student';
// import Assigned_team from './Assigned_team';
// import CreateTeam from './createteam';
// import EditQuiz from './Editquiz';
// import AutoCompleteText from './AutoCompleteText';
// import  './AutoComplete_Style.css';
// import stored_email from './stored_email';
// import  Assign_stud_obj from './Assign_stud_API';
import React from 'react';
import Assigned_student from './Assigned_student';
import  "../../styles/_AutoComplete_Style.scss";
import ButtonTooltip from '../../Components/Buttontooltip';
//import Navbar from '../../components/Navbar/Navbar'
import {Link} from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import history from '../../redux/helper/history'
import Assign_team from './Assigned_team';

class Assign extends React.Component{
 
    constructor(props){
         super(props);
         this.Assigned_studentElement=React.createRef();
         this.Assigned_teamElement=React.createRef();
            this.handleDone=this.handleDone.bind(this);
        }
        handleDone(saveindivlist){
            //alert("your data is saved as draft");
            console.log("im in done",saveindivlist);
            const allids= saveindivlist.map((items)=>{return items.id});
            //   sessionStorage.setItem('emaillist',JSON.stringify(saveindivlist));
            console.log(saveindivlist);
              //quizid : "5ff565dc9139262ac4e26367"
              let data_info = {
                  userid : allids,
                  quizid : this.props.history.location.state.tech._id
              }
              let user = JSON.parse(localStorage.getItem('user'));
                console.log(user.accessToken)
                 fetch("http://localhost:3000/api/assignuser",{
                   method : 'POST',
                   headers : {
                              'Content-type' : 'application/json',
                              'Accept': 'application/json',
                               'x-access-token': user.accessToken 
                              },
                    body : JSON.stringify(data_info)
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
               .then(data => console.log("Hosted Successfully"+data))
               .catch(error => {
                   alert(error);
                   //window.location.reload();
               })         
       }
              //sessionStorage.setItem('teamlist',JSON.stringify(saveteamlist));
//   if(teamname!=null && teamname!="")
//   sessionStorage.setItem('teamname',JSON.stringify(teamname));
  
        handleDone1(saveteamlist){
            alert("your data is saved as draft");
            //console.log("im in done",saveteamlist);
              
              //sessionStorage.setItem('emaillist',JSON.stringify(saveindivlist));
             // sessionStorage.setItem('teamlist',JSON.stringify(saveteamlist));
              const allids= saveteamlist.map((items)=>{return items.id});
              console.log(saveteamlist);

              let data_info = {
                  qroupid : allids,
                  quizid :  this.props.history.location.state.tech._id
              }
              let user = JSON.parse(localStorage.getItem('user'));
                console.log(user.accessToken)
                 fetch("http://localhost:3000/api/assignqroup",{
                   method : 'POST',
                   headers : {
                              'Content-type' : 'application/json',
                              'Accept': 'application/json',
                               'x-access-token': user.accessToken 
                              },
                    body : JSON.stringify(data_info)
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
               .then(data => console.log("Hosted Successfully team",data))
               .catch(error => {
                   alert(error);
                   //window.location.reload();
               })         
//   if(teamname!=null && teamname!="")
//   sessionStorage.setItem('teamname',JSON.stringify(teamname));
        
 
        }
        back(){
           // history.goBack();
        }
        render(){
          // document.body.style.background = "url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1060402833.1609857858') "; 
           document.body.style.background ="url('https://image.freepik.com/free-photo/man-writing-something-with-chalk-top-view-frame-black_176474-2892.jpg')" ; 
           document.body.style.backgroundSize="cover";
           document.body.style.backgroundAttachment="fixed";
           
            return(<>
                    <Navbar/>
                    <br/>
                    {/* <button type="button" onClick={()=>this.back}>Back</button> */}
                     <Link to="/createT"><img className="team-img" src="https://www.flaticon.com/svg/static/icons/svg/1256/1256650.svg" >
                         </img><h6 className="btn-link-create" >Create new <span className="font-weight-bolder">Team !</span></h6></Link>
     
                     <br/> <br/>
                     <h4 className="team-heading">Assign Individuals</h4>

                      

                    <div className="left-alignment">
                      

                        <Assigned_student ref={this.Assigned_studentElement} title="Assign Individual"/>
                        <ButtonTooltip onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist())} title="Assign the quiz" name="Assign"/> 
                        <hr/>
                     </div>
                    
                     
                     <h4 className="team-heading">Assign Teams</h4>
                    
                     <div className="left-alignment" >
                          <Assign_team  ref={this.Assigned_teamElement} title="Assign Team"/>
                          <ButtonTooltip onClick={()=>this.handleDone1(this.Assigned_teamElement.current.getteamlist())} title="Assign the quiz" name="Assign"/> 

                        {/* <Assigned_student ref={this.Assigned_studentElement} title="Assign Individual"/> */}
                        {/* <Assigned_student ref={this.Assigned_studentElement}/>
                        <hr/>
                     </div>
                     <br/>
                   
                     <div>
                          <Assign_team  ref={this.Assigned_teamElement} /> */}

                         <hr/>
                     
                     </div>
                     {/* <div className="row">

                         <div className="btn-save"> 
                         <ButtonTooltip onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist(),this.Assigned_teamElement.current.getteamlist())} title="Save as darft" name="Save"/> 

                         <div className="col-sm-12 text-right">  */}
                         {/* <ButtonTooltip onClick={()=>this.handleDone(this.Assigned_teamElement.current.getteamlist())} title="Host the quiz" name="Host"/>  */}

                         {/* <ButtonTooltip title="Host the Quiz" name="Host"/> */}
                          {/* </div>
                         </div>
                         </div>  */}
             </>
            )
        }
    }
    export default Assign;







