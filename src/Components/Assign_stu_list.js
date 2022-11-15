import React from 'react';

const ListComp = ({key,title,onClick}) => {
 
    return(<>
     <span key={key}>  
        <li className="list-group-item list-group-item-primary p-1 m-1">{title}
        <button type="button" className="close" onClick={onClick} aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        </li></span>
    </>)

}

export default ListComp;