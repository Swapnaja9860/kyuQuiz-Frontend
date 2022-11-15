

 class Assign_stud_API {
    constructor(){

        this.studentemail=[]
        //super();
        // if(window.location.href.includes('/createT')){
        // console.log("in stud true");
        // if(JSON.parse(sessionStorage.getItem('createdtemaillist'))){                        //for create team page
        //     this.studentemail=JSON.parse(sessionStorage.getItem('createdtemaillist'));
        //     }
        //     else{
        //         this.studentemail=[]
    
        //     }
        // }
        // else{
        //     console.log("false");
        //     if(JSON.parse(sessionStorage.getItem('emaillist'))){
        //         this.studentemail=JSON.parse(sessionStorage.getItem('emaillist'));
        //         }
        //         else{
        //             this.studentemail=[]
        
        //         }
        // }
       
        
       
        }
        
       
        //subscribe  to the event that is emitted
         
    
     
        
    
      getAll(){
      
           return this.studentemail ;
          
        }
           createTodo(emailtext,gotid){
            const id=gotid;
            console.log("in create doto"+gotid);
            // const id=Date.now();
          
           
            this.studentemail.push({id,emailtext});
            console.log(this.studentemail);
        }
        deletetask(iddel){
            console.log("value to be deleted"+iddel);
        console.log("in_delete before delete"+ this.studentemail);
     
        this.studentemail=this.studentemail.filter(item => item.id !== iddel);
        console.log("after delete"+this.studentemail);
        }
       
}
const Assign_stud_obj=new Assign_stud_API();

//window.dispatcher=dispatcher;
export default Assign_stud_obj;