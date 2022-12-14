export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        console.log("in auth header")
        return {'content-type' : 'application/json',
            'Authorization': user.accessToken };
    } else {
        return {};
    }
}