import { LOGOUT } from "./types";

function LogoutAction(){
    return function(dispatch){
       localStorage.removeItem('user');
       //alert("Logged Out")
       dispatch({type : LOGOUT});
}
}
export default LogoutAction;