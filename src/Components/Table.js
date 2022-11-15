import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import * as ReactBootstrap from "react-bootstrap";

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { NavLink } from 'react-router-dom';

 import Non_technical from '../static_data/Non_technical';
 import Technical from '../static_data/Technical';
const useStyles = makeStyles((theme) => ({
 
    //  root: { 
    //    marginLeft:250,
    //    marginTop:50,
    //   width:'54.3%',
    //  },
     expand: {
       transform: 'rotate(0deg)',
       marginLeft: 'auto',
       transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
       }),
     },
     expandOpen: {
       transform: 'rotate(180deg)',
     },
   
   }));

   
   
const Table = () =>
{
    const renderNonTechnical=(Non_technical,index)=>{
        return(
            <tr key={index}>
                <td>{Non_technical.technical}</td>
                <td>{Non_technical.name}</td>
                <td>{Non_technical.start}</td>
                <td>{Non_technical.end}</td>
                <td>{Non_technical.duration}</td>
                <td>{Non_technical.marks}</td>
                <td>{Non_technical.status}</td>
            </tr>
        )
    }

       const classes = useStyles();
        
        const [expanded, setExpanded] = React.useState(false);
        const [expandedc, setExpandedc] = React.useState(false);
       
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
    
        const handleExpandClickc = () => {
          setExpandedc(!expandedc);
        };


    return (
        <div className="Tables">
<ReactBootstrap.Table>
            <tr>
            {/* <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                 >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions> */}
<th>Technical Quiz</th>
<th>Teacher's name</th>
<th>Start Date</th>
<th>End Date</th>
<th>Duration</th>
<th>Marks</th>
<th>Status</th>
</tr>
<tbody>
                  {/* <Collapse in={expandedc} timeout="auto" unmountOnExit>    */}
                  {Technical.map(renderNonTechnical)}
                  {/* </Collapse>  */}
                </tbody>
      
             {/* <Collapse in={expanded} timeout="auto" unmountOnExit>  */}
             
            {/* </Collapse> */}
            
</ReactBootstrap.Table>
        <br/><br/>
      
<ReactBootstrap.Table>
        <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expandedc,
                })}
                onClick={handleExpandClickc}
                aria-expanded={expandedc}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          <tr>
            <th>Non-Technical Quiz</th>
            <th>Teacher's name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Marks</th>
            <th>Status</th>
        </tr>
        
         
                  <tbody>
                  {/* <Collapse in={expandedc} timeout="auto" unmountOnExit>    */}
                  {Non_technical.map(renderNonTechnical)}
                  {/* </Collapse>  */}
                </tbody>
             
</ReactBootstrap.Table>
        </div>

        
        
    )
}
export default Table;