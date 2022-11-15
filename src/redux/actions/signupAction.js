import {SIGNUP} from '../actions/types'
import { history } from '../helper/history';

function SignupAction(data)
{  
    return function(dispatch)
   { 
        console.log("signup api call",JSON.stringify(data))
        fetch("http://localhost:3000/api/auth/signup",{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(handleResponse)
        .then(data => {
            dispatch({type : SIGNUP,payload : data});
            //alert("You are registered successfully")
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
    // if(!response.ok){
    //     return response.json()
    //     .then(json=>{

    //     })
        // console.log("handeler err throw",response);
        // throw Error(response.statusText,'');
    }
   

export default SignupAction;

// import {SIGNUP} from '../actions/types'
// import { history } from '../helper/history';

// function SignupAction(data)
// { 
//     return function(dispatch)
//    { 
//         console.log("dghdg")
//         fetch("http://localhost:3000/api/auth/signup",{
//             method : 'POST',
//             headers : {'content-type' : 'application/json'},
//             body : JSON.stringify(data)
//         })
//         .then(handleResponse)
//         .then(data => {
//             dispatch({type : SIGNUP,payload : data});
//             alert("You are registered successfully")
//             history.push('/login');
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
// }

// // resolve({ ok: true, text: () => Promise.resolve() });
// function handleResponse(response){
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     return response.json();
// }
// export default SignupAction;