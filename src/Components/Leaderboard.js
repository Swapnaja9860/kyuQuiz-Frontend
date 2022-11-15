import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import partypop1 from "./../images/partypop1.gif";
import first from "./../images/first.gif";
import second from "./../images/second.gif";
import third from "./../images/third.gif";
import partypop2 from "./../images/partypop1.gif";
import FooterContainer from './FooterContainer';


class Leaderboard extends React.Component{
    constructor(props){
        super(props)
        
    
 this.state = {
      list : this.props.data,
    }
    this._clickAllTime = this._clickAllTime.bind(this);
    this._clickRecent = this._clickRecent.bind(this);
  }






  // componentDidMount() {
  //   const fetchInit = {
  //     method: 'GET',
  //     mode: 'cors'
  //   };

    // STEPS TO GET DATA FROM API
  //   fetch(`${ this.props.apiURL }`, fetchInit)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         list: data
  //       });
  //     })
  //     .catch(err => console.log('fetch error : ', err))
  // }

  _clickAllTime(e) {
    let sorted = this.state.list.sort((a, b) => b.alltime - a.alltime);
    console.log("sorted list",sorted)
    //this.setState(sorted);
  }

  _clickRecent(e) {
    let sorted = this.state.list.sort((a, b) => b.recent - a.recent);
    this.setState(sorted);
  }

  render(){

 
     //<User username={ user.username } rank={ i + 4 } score={ user.score }/>);
   
    //   let userlist = this.state.list.map((user, i) => {
    //    if(user.traineeId){
    //     console.log("abc",user.percentage);
    //   <User username={ user.traineeId.firstname} rank={ i + 4 } score={ user.percentage }/>}});
    // console.log("try this",this.state.list)
    let trial = [];
    this.state.list.map((user, i) => {
      if(user.traineeId){
       trial.push(user)
      }});
    console.log("filter list",trial);
    //console.log(userlist)
       //const mylist = [].concat(this.state.list)
       let final = []
       let trial1 = [].concat(trial)
       .sort((a, b) => a.percentage < b.percentage ? 1 : -1)
       .map((user, i) => {
       final.push(user)
       //console.log("checking",user)
       }
        //<div key={i}> { user.traineeId.firstname }  { i + 4 } { user.percentage*100 }</div>
       );
       let userlist = final.map((user, i) =><User username={ user.traineeId.firstname } rank={ i+1 } score={ user.percentage*100 }/>);
       //console.log(final[0].percentage*100)
       console.log("finalllyy",final)
    return (  
    <div className="leaderboard-body">
      
        <Navbar/>
        
      <div className="winner-leaderboard">
      <div class="winner px-10">
  <div class="row row-cols-lg-3 row-cols-1">
    <div class="col">
  
       <div class="card text-center">
  <div class=" card-body-leaderboard">
    <h5 class="card-title-leaderboard "><img className="first"src={first} width="100px"height="100px" /><br/>{final[0] ? final[0].traineeId.firstname : 0}</h5>
    <div class="card-text">
    Score : {final[0] ? final[0].percentage*100: 0}
  </div>
  </div>
  
</div>

    </div>
    <div class="col">
     <div class="card text-center">
  <div class=" card-body-leaderboard">
    <h5 class="card-title-leaderboard "> <img className="second" src={second} width="100px"height="100px"/><br/>{final[1] ? final[1].traineeId.firstname : "No user"}</h5>
    <div class="card-text">
    Score :  {final[1] ? final[1].percentage*100: 0}
  </div>
  </div>
 
</div>
    </div>

    <div class="col">
     <div class="card text-center">
  <div class=" card-body-leaderboard">
    <h5 class="card-title-leaderboard "> <img className="third" src={third} width="100px"height="100px"/><br/>{final[2] ? final[2].traineeId.firstname : "No user"}</h5>
    <div class="card-text">
    Score :  {final[2] ? final[2].percentage*100: 0}
  </div>
  </div>
  
</div>
    </div>
  </div>
</div>
     <br/><br/>
      
        <LeaderboardHeader />
        
        <ColumnHeader onClickAll={this._clickAllTime} onClick={this._clickRecent}/>
        { userlist }
      </div>
        <FooterContainer/>
      </div>
    )
  }
} 


const LeaderboardHeader = () => {
    return (
      <div className="leadheader">
         <img className="partypop1"src={partypop1}  />  
         <h1></h1>
         <h1>Leaderboard</h1>
         <h1></h1>
         <img className="partypop2"src={partypop2} />
      </div>
    )
  }
  
  
  const ColumnHeader = ({
    onClick,
    onClickAll
  }) => (
    <div className="row colheader">
        <div className="col">
          <h4>Rank</h4>
        </div>
        <div className="col-5">
          <h4>Name</h4>
        </div>
        <div className="col recent">
          <h4 onClick={onClick} >Score</h4>
        </div>
      </div>
  );
  
  
  ColumnHeader.propTypes = {
    onClick: PropTypes.func,
    onClickAll: PropTypes.func
  }
  
  const User = ({username,rank,score}) => {
    return (
      <div className="row users  vcenter">
          <div className="col">
            <h4>{rank}</h4>
          </div>
          <div className="col-5">
          <h4>{username}</h4>
          </div>
          <div className="col">
            <h4>{score}</h4>
          </div>
        </div>
    )
  }
  
  // User.propTypes = {
  //   rank: PropTypes.number.isRequired,
  //   img: PropTypes.string.isRequired,
  //   username: PropTypes.string.isRequired,
  //   recent: PropTypes.number.isRequired,
  //   alltime: PropTypes.number.isRequired
  // }
  



export default Leaderboard;