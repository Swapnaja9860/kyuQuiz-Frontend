import React from 'react';
import ListItems from './listitems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import add from '../images/add.png';
library.add(faEdit)

class edit_questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
      //items : [],
      // currentItem:{
      //   text:'question 1',
      //   key:'',
      //   count: 2
      // }
      currentItem: localStorage.getItem('currentItem') ? JSON.parse(localStorage.getItem('currentItem')) : {
        text:'question 1',
        key:'',
        count: 2
      }

    }
    this.addItem = this.addItem.bind(this);
    this.SelectedItem = this.SelectedItem.bind(this);
  }
  addItem(e){
    e.preventDefault();
   // var items_store = localStorage.getItem('items');
   //items_store = JSON.parse(items_store);
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'question '+newItem.count,
        key:'',
        count: newItem.count+1
      }
    })
    localStorage.setItem('items', JSON.stringify(this.state.items));
    localStorage.setItem('currentItem', JSON.stringify(this.state.currentItem));
    }
  }
 
  SelectedItem(key){
    console.log(key);
  }
 
 render(){
   var items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
   //items = JSON.parse(items);
   console.log(items)
  return (
    <><button className="form-button" onClick={this.addItem} ><img src={add} alt="my image" width="50px" height="50px"/>Add Question</button>
    <div className="edit_questions" >
      
        <form id="to-do-form">
          {/* <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input> */}

          
        </form>
        
       
         <p >{this.state.items.text}</p>
         <ListItems  items={items} SelectedItem={this.SelectedItem}/>
 
    </div></>
  );
 }
}


export default edit_questions;
