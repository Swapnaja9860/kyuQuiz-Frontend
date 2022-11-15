import {QUIZNAME} from '../actions/types'
import { history } from '../helper/history';

function QuiznameAction(quiz_info){
   //var array_ques = [];
   return function(dispatch)
   { 
        console.log("In action");
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.accessToken)
        fetch("http://localhost:3000/Api/quiz/create",{
            method : 'POST',
            headers : {
                       'content-type' : 'application/json',
                        'x-access-token': user.accessToken 
                       },
                       //'content-type' : 'application/json',
            //headers : authHeader(),
            body : JSON.stringify(quiz_info)
        })
        .then(handleResponse)
        .then(data => {
         dispatch({type:QUIZNAME , payload: data});
            //alert("created successfully")
            //history.push('/');
        })
        .catch(error => {
            alert(error);
            window.location.reload();
         })
    }
   // return function(dispatch)
   // {
   //  console.log("in action..")
   //  dispatch({type:QUIZNAME , payload: quiz_info});
   //  history.push('/create_questions')
   // }
}

function handleResponse(response){
   return response.json()
   .then(json => {
       if(response.ok){
           return json;
       }
       else{
           throw Error(json.message);
       }})
}

export default QuiznameAction;