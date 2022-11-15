import { LOGIN } from "./types";
import { history } from '../helper/history';


function LoginAction(cred)
{
    return function(dispatch,msg){
        console.log("workin...")
        fetch("http://localhost:3000/api/auth/signin" , {
            method : 'POST',
            headers :{ 'content-type' : 'application/json'},
            body: JSON.stringify(cred)
          })
          .then(handleResponse)
          .then(data => {
            localStorage.setItem('user',JSON.stringify(data))
            return data;})
          .then(data => {
            dispatch({type : LOGIN,payload : data});
            //alert("logged in sucessfully")
            if(data.roles== "ROLE_TRAINEE")
            {
            history.push('/home');
            }
            else{
              history.push('/teacher')
            }
          })
          .catch(error => {
              console.log("Login API",error);
              window.location.reload();
          })
         
    }
    
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
export default LoginAction;