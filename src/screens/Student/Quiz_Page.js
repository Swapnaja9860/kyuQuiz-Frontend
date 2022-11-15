import React, { useEffect } from 'react';

import Popup from '../../Components/Popup';
function Student_Report(props){
    useEffect(() => {
        console.log(props.history.location.state.enrollment);
      // setEnrollment(props.history.location.state);
         
         
      }, []);
return (<>
<div className="quiz_page_bg"></div> <Popup state={props.history.location.state.enrollment}/>
</>
);
}
export default Student_Report;