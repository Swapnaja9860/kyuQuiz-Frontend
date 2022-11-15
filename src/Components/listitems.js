import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

function listitems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text}/>
        <span>
       <Link to='teacher_question'>
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.SelectedItem(item.text)
        }} icon="edit" /></Link>
        </span>
     </p>
     
    </div>})
    return <div>
        {/* <FlipMove duration={300} easing="ease-in-out"> */}
        {listItems}
        {/* </FlipMove> */}
    
    </div>;
  }

  export default listitems;