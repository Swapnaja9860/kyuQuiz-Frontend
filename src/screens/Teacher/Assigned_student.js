import React from 'react';

import  Assign_stud_obj from "../../functionality/assignstudent/Assign_stud_API";
import AutoCompleteText from '../../functionality/assignstudent/AutoCompleteText';
import  "../../styles/_AutoComplete_Style.scss";
import stored_email from '../../functionality/assignstudent/stored_email';
import ButtonTooltip from '../../Components/Buttontooltip';
import SmallText from '../../Components/small_text';
import ListComp from '../../Components/Assign_stu_list'
import { Height } from '@material-ui/icons';
 class Assigned_student extends React.Component{
    
    constructor(props){
         super(props);
        this.state={
            assigned_email:Assign_stud_obj.getAll(),
            val1:"",
            stored_email: null,
            forid:-1};
            this.AutoCompleteTextElement=React.createRef();
      
        this.takeemail=this.takeemail.bind(this);
         this.addemail=this.addemail.bind(this);
        this.deleteemail=this.deleteemail.bind(this);
        this.getindivlist=this.getindivlist.bind(this);
       
    }
    
    componentWillMount(){
             let user = JSON.parse(localStorage.getItem('user'));
             console.log(user.accessToken)
              fetch("http://localhost:3000/api/groups/create",{
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
                           this.setState({stored_email : data})
                           console.log("this is student data",this.state.stored_email)
            })
            .catch(error => {
                alert(error);
                //window.location.reload();
            })         
    }
    
    takeemail(text_from_child,from_child_itemid){
        console.log("in take email");
        // this.setState({val1:event.target.value});
       
        this.setState({val1:text_from_child});
        this.setState({forid:from_child_itemid})
        console.log(this.state.val1);

    }
    getindivlist(){
        let list=this.state.assigned_email;
        return list;
        
    }
    addemail(){
        console.log("in addemail");
        console.log("this is state null"+this.state.val1);
        const allemails=this.state.assigned_email.map((items)=>{return items.emailtext});
        console.log(allemails);
        let isrepeate=allemails.includes(this.state.val1);
        if(this.state.val1 && !isrepeate)
        {
        
    
        Assign_stud_obj.createTodo(this.state.val1,this.state.forid);
        this.setState({assigned_email:Assign_stud_obj.getAll()}); }
        // this.setState({val1:""});
       
        
        this.AutoCompleteTextElement.current.maketextnull();
        console.log("state adding"+this.state.assigned_email);
    }
    deleteemail(iddel){
        console.log("in deleteemail");
        Assign_stud_obj.deletetask(iddel);
        console.log("getAll"+Assign_stud_obj.getAll());
        
        this.setState({assigned_email:Assign_stud_obj.getAll()});
        console.log("state after deletion"+this.state.assigned_email); 
    }
  
    handleDone(printemailist){
  sessionStorage.setItem('emaillist',JSON.stringify(printemailist));
  alert("your data is saved as draft");

    }

     render()
    {
       
     const printemailist=this.state.assigned_email;
    //  sessionStorage.setItem('emaillist',JSON.stringify(printemailist));
     console.log("render"+printemailist);
    
        const EmailComponents = printemailist.map((email) =>{
        return(
         <ListComp key={email.id} title={email.emailtext} onClick={()=>this.deleteemail(email.id)} aria-label="Close" />) 
        });
        
        
        return (
             <div className="team">
             <div>
                <h5 className="text-capitalize mb-2 font-weight-bold">{this.props.title}</h5>
                
               {/* <div className="col-sm-12 col-md-10 col-lg-5"> */}
               {/* <SmallText className="team-title" title="Add Trainees Here"/> */}
               <h4 className="col-9 col-md-8 col-lg-6 col-xl-4 team-title">Add trainees here</h4>
              
                    <div>
                    <div className="row"> 
                     <div className="col-9 col-md-8 col-lg-6 col-xl-4 input-block"> 
                    {/* <div className="col-9"> */}
                   
                   {this.state.stored_email ? <AutoCompleteText type="text"  placeholder="Enter Trainee Name "  ref={this.AutoCompleteTextElement} isstudent={true}
                    items={this.state.stored_email}  onTake={this.takeemail}/> : console.log("...loading") }
                   
                    </div>
                    <div className="col-3 col-md-5 col-lg-1 col-xl-1">
                    <button className="add-button pt-3 pb-3 p-md-3" onClick={this.addemail}>+</button></div>
                    {/* <ButtonTooltip onClick={()=>this.handleDone(this.Assigned_studentElement.current.getindivlist(),this.Assigned_teamElement.current.getteamlist())} title="Assign Individual" name="Assign"/>  */}
                    </div>
                    </div>
                   
                    </div>
                    {/* <div className="col-12"> */}
                    <div className="col-sm-12 col-md-9 col-lg-6 col-xl-4"> 
                    <ul className="list-group display-text mb-2 mt-2">{EmailComponents}</ul>  </div>
                    {/* <div className="row">
                    <div className="col-sm-12 text-right"> 
                  
                    <ButtonTooltip onClick={()=>this.handleDone(printemailist)} title="Save as darft" name="Save"/> 
                    <ButtonTooltip title="Host the Quiz" name="Host"/>
                     </div>
                    </div>  */}
                    
                    {/* </div>  */}
                 
                        
                   {/* <button type="button" className="btn btn-primary p-2" data-mdb-toggle="tooltip" data-mdb-placement="top" title="Create Team">
                               Create Team</button> */}
                        
  
                   {/* </div> */}
                     {/* <div>
                      <h5>Do you want to create a Team?</h5>
                      <SmallText title="if you would like to create a group of people and use for future as well"/>
                      <button className="btn btn-primary p-2 m-1 align-content-center">Create</button>
                     </div> */}
                  </div>
          
           
           )
     }
    


}
export default Assigned_student;