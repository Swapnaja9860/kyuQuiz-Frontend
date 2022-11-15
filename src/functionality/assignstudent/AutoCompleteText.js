import React from 'react';

export default class AUtoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items=this.props.items;
                this.state={
            suggestions:[],
            text:'',
        };
    
        this. onTextChange=this.onTextChange.bind(this);
        this. renderSuggestions=this.renderSuggestions.bind(this);
        this. suggestionSelected=this. suggestionSelected.bind(this);
        this. maketextnull=this.maketextnull.bind(this);

    }
    maketextnull(){
        this.setState(()=>({text:''}));
    }
    onTextChange(e){
        console.log("inOnTextChange",this.items);
        const value=e.target.value; 
        let suggestions=[]; 
        let emaillist=[];
        if(value.length>0){
            const regex=new RegExp(`^${value}`,'i');//i for case sensitive 
            emaillist=this.props.isstudent?this.items.map((item) =>{return `${item.firstname} ${item.lastname} (${item.email})`})
            :this.items.map((item) =>{return `${item.group_name}`});
            suggestions=emaillist.sort().filter(v=>regex.test(v));
        }
        this.setState(()=>({suggestions,text:value}));
       
    }
    suggestionSelected(value){
        let itemid;
       
        var res = value.split(" ");
        console.log("suggestion selected"+res);
        itemid=this.props.isstudent?this.props.items.find(obj => obj.email === res[2].replace(/[()]/g, ''))._id//written the expression for taking out the round brackets
        :this.props.items.find(obj => obj.group_name === value)._id;
        console.log("see"+itemid);
        this.props.onTake(value,itemid);
        this.setState(()=>({
            text:value,
    
            suggestions:[],
        }))
       
    }
    renderSuggestions(){
        const {suggestions}=this.state;
        if(suggestions.length===0){
            return null;
        }
        return ( 
        // suggestions.map((items)=>
        // <li className="list-group-item-action list-group-item-light p-1" onClick={()=>this.suggestionSelected(items)}>
        //    {items}
        // </li>)
        <ul className="list-group AutoUl" >
         {suggestions.map((items)=><li className="list-group-item-action list-group-item-light p-1" style={{fontSize:"18px"}} onClick={()=>this.suggestionSelected(items)}>
           {items}
        </li>)}
        </ul>
        )
    }
    render(){
        const {text}=this.state;
        return( 
                <>
                <div>
                <div>
                <input type={this.props.type}  className="auto-input" aria-describedby="emailHelp" value={text} onChange={this.onTextChange} placeholder={this.props.placeholder}/>
                {this.renderSuggestions()}
                </div>
                {/* <div className="col-sm-12 col-md-10 col-lg-5"> 
                <ul className="list-group AutoUl mt-0 style={{width:'15rem'}}" > */}
               
                {/* </ul>
                </div> */}
                </div>
                </>
        )
    }
}