

 class Assign_team_API {
    constructor(){
        //super();
        // if(JSON.parse(sessionStorage.getItem('teamlist'))){
        // this.teamnamelist=JSON.parse(sessionStorage.getItem('teamlist'));
        // }
        // else{
            this.teamnamelist=[]

        
        
       
        }
        
       
        //subscribe  to the event that is emitted
         
    
     
        
    
      getAll(){
      
           return this.teamnamelist ;
          
        }
           createTodo(teamname,gotid){
            console.log("in create doto");
            // const id=Date.now();
          const id=gotid;
           
            this.teamnamelist .push({id,teamname});
           
     
            
            
               console.log(this.teamname);
        }
        deletetask(iddel){
            console.log("value to be deleted"+iddel);
        console.log("in_delete before delete"+ this.teamname);
     
        this.teamnamelist =this.teamnamelist .filter(item => item.id !== iddel);
        console.log("after delete"+this.teamnamelist );
        }
       
}
const Assign_team_obj=new Assign_team_API();

//window.dispatcher=dispatcher;
export default Assign_team_obj;