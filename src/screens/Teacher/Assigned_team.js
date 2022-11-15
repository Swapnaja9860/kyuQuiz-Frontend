import React from 'react';
import  Assign_team_obj from '../../functionality/assignTeam/Assign_team_API';
import AutoCompleteText from '../../functionality/assignstudent/AutoCompleteText';
//import  "../../styles/AutoComplete_Style.css";
//import stored_team from '../../functionality/assignTeam/stored_team';
import  "../../styles/_AutoComplete_Style.scss";
import stored_team from '../../functionality/assignTeam/stored_team';
import ButtonTooltip from '../../Components/Buttontooltip';
import SmallText from '../../Components/small_text';
import ListComp from '../../Components/Assign_stu_list';
 class Assigned_team extends React.Component{
 
    constructor(){
         super();
        this.state={
            team_names:Assign_team_obj.getAll(),
            val1:"",
            forid:-1,
            stored_team : null};

            this.AutoCompleteTextElement=React.createRef();
      
        this.taketeamname=this.taketeamname.bind(this);
         this.addteam=this.addteam.bind(this);
        this.deleteteam=this.deleteteam.bind(this);
        this.handleHost=this.handleHost.bind(this);
        this.getteamlist=this.getteamlist.bind(this);
       
    }

    taketeamname(text_from_child,from_child_itemid){
        console.log("in take email");
        // this.setState({val1:event.target.value});
       
        this.setState({val1:text_from_child});
        this.setState({forid:from_child_itemid});
        console.log(this.state.val1);

    }
    addteam(){
        console.log("in addemail");
        console.log("this is state null"+this.state.val1);
        const allteams=this.state.team_names.map((items)=>{return items.teamname});
        console.log(allteams);
        let isrepeate=allteams.includes(this.state.val1);
        if(this.state.val1!="" && !isrepeate)
        {
        Assign_team_obj.createTodo(this.state.val1,this.state.forid);
        console.log("i am in add emai if");
        this.setState({team_names:Assign_team_obj.getAll()});
        // this.setState({val1:""});
       
        }
        console.log("i am not in add emai if");
        this.AutoCompleteTextElement.current.maketextnull();
        console.log("state adding"+this.state.team_names);
    }
    deleteteam(iddel){
        console.log("in deleteemail");
        Assign_team_obj.deletetask(iddel);
        console.log("getAll"+Assign_team_obj.getAll());
        
        this.setState({team_names:Assign_team_obj.getAll()});
   
        console.log("state after deletion"+this.state.team_names);
       
        
    }
  
//     handleDone(printteamlist){
//   sessionStorage.setItem('teamlist',JSON.stringify(printteamlist));
//   alert("your data is saved as draft");

//     }
getteamlist(){
    let list=this.state.team_names;
    return list;
    
}
handleHost(printteamlist){
     sessionStorage.removeItem('teamlist',JSON.stringify(printteamlist));
      }

      componentWillMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.accessToken)
         fetch("http://localhost:3000/api/groups",{
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
       .then(data => {//console.log(data)
                      this.setState({ stored_team : data.groups})
                        console.log("stored_team",this.state.stored_team);
                      console.log("Team data",data)
       })
       .catch(error => {
           alert(error);
           //window.location.reload();
       })         
}
     render()
    {
       
     const printteamlist=this.state.team_names;
    //  sessionStorage.setItem('emaillist',JSON.stringify(printemailist));
     console.log("render"+printteamlist);
     console.log(this.props.hostvisible);
        const TeamComponents = printteamlist.map((team) =>{
        return(
            // <span key={team.id}>
            // <li className="p-3">
            // <span>{team.teamname}<button className="ml-2" onClick={()=>this.deleteteam(team.id)}>delete</button></span>
                
            // </li>
            // </span>
             <ListComp key={team.id} title={team.teamname} onClick={()=>this.deleteteam(team.id)} aria-label="Close" />
        ) });

        return <div>

            
             <div>
                <h5 className="text-capitalize m-2">{this.props.title}</h5>
                
               {/* <div className="col-sm-12 col-md-10 col-lg-5"> */}
               <h4 className="col-9 col-md-8 col-lg-6 col-xl-4 team-title">Add Teams here</h4>
                    <div>
                    <div className="row">
                    <div className="col-9 col-md-8 col-lg-6 col-xl-4">
                   {this.state.stored_team ?<AutoCompleteText type="text" placeholder="Enter Team Name"  ref={this.AutoCompleteTextElement} 
                    isstudent={false} items={this.state.stored_team}  onTake={this.taketeamname}/> 
                    : [] }
                    {/* <AutoCompleteText type="text" placeholder="Enter Team Name"  ref={this.AutoCompleteTextElement} 
                    isstudent={false} items={this.state.stored_team}  onTake={this.taketeamname}/>  */}
                    </div>
                   
                    <div className="col-3 col-md-2 col-lg-1 col-xl-1">
                    <button className="add-button pt-3 pb-3 p-md-3" onClick={this.addteam}>+</button></div>
                    {/* <ButtonTooltip onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist(),this.Assigned_teamElement.current.getteamlist())} title="Assign Team" name="Assign"/>  */}
                    </div>
                    </div>
                   
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-6 col-xl-4"> 
                   <ul className="list-group display-text mb-2 mt-2">{TeamComponents}</ul> </div> 
             {/* <span> <button onClick={()=>this.handleDone(printteamlist)} className="mr-2">Done</button> 
             {this.props.hostvisible?<button onClick={()=>this.handleHost(printteamlist)} >Host</button>:null}</span> */}


             {/* ---------------------------------------------Team-------------------- */}



           
            </div>;
     }
    


}
export default Assigned_team;