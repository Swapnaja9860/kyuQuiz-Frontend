import { Button } from 'bootstrap';
import React from 'react';
import FooterContainer from '../../Components/FooterContainer';
import Navbar from '../../Components/Navbar';
import '../../Components/Report_Card';
import Report_Card from '../../Components/Report_Card';


function ReportStudent(props){
   
return (<div >
<Navbar/>
<Report_Card data={props.history.location.state.tech}/>
<FooterContainer/>
</div>
);
}
export default ReportStudent;