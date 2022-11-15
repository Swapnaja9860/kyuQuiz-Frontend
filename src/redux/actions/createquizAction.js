import {QUIZINFO} from '../actions/types'
import { authHeader } from '../helper/auth_header';
import { history } from '../helper/history';

function QuizinfoAction(data)
{  
    return function(dispatch)
   { 
        console.log("create new quiz api call");
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user.accessToken)
        fetch("http://localhost:3000/api/trainer/createNewQuiz",{
            method : 'POST',
            headers : {
                       'content-type' : 'application/json',
                      'x-access-token': user.accessToken 
                       },
                       //'content-type' : 'application/json',
            //headers : authHeader(),
            body : JSON.stringify(data)
        })
        .then(handleResponse)
        .then(data => {
            dispatch({type : QUIZINFO,payload : data});
            alert("successfully")
            history.push('/');
        })
        .catch(error => {
            alert(error);
            window.location.reload();
         })
    }
}

// resolve({ ok: true, text: () => Promise.resolve() });
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
    // if(!response.ok){
    //     return response.json()
    //     .then(json=>{

    //     })
        // console.log("handeler err throw",response);
        // throw Error(response.statusText,'');
    
   

export default QuizinfoAction;

