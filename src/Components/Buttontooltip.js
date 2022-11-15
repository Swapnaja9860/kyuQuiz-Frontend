import React from 'react';

const ButtonTooltip = ({title,name,onClick}) => {
 
    return(<>
 {/* <button type="button" onClick={onClick} className="btn btn-primary  ml-2" data-mdb-toggle="tooltip" data-mdb-placement="top" title={title}>
    {name}</button> */}
    
      <button type="button" onClick={onClick} class="btn btn-outline-primary ml-3 btn-lg" data-mdb-toggle="tooltip" data-mdb-placement="top" title={title}>{name}</button>
     {/*<button type="button" onClick={onClick} className="btn text-primary ml-4 mt-10 btn-outline-primary" data-mdb-toggle="tooltip" data-mdb-placement="top" title={title}>
    {name}</button> */}
     </>)

}

export default ButtonTooltip;