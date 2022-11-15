import React from 'react'
import Leaderboard from '../../Components/Leaderboard'

class Leaderboard_API extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            list : null,
            quizid : props.history.location.state.tech
        }
    }

    componentWillMount(){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.accessToken)
       // var id = "5fec1ba830348724cc358650";
        //this.props.tech._id
        //var id = "5ff565dc9139262ac4e26367";
        //id = JSON.stringify(id)
         fetch('http://localhost:3000/api/quizReport/report/'+this.state.quizid._id,{
           method : 'GET',
           headers : {
                      'Content-type' : 'application/json',
                      'Accept': 'application/json',
                       'x-access-token': user.accessToken 
                      }
       })
       .then(response => {
           return response.json()
           .then(json => {
               if(response.ok){
               return json;
               }
               else{
                   throw Error(json.message);
               }})
       })
       .then(data => {//console.log(data)
                console.log("leaderboard",data)
                this.setState({list : data})
       })
       .catch(error => {
           alert(error);
           //window.location.reload();
       })         
    }

    render(){
        return(
            <>
           { this.state.list ? <Leaderboard data={this.state.list} /> : console.log("wait it will work") }
            </>
        )
    }
}

export default Leaderboard_API;