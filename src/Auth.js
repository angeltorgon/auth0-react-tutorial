/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import Login from "./views/Login";

const LOGIN_SUCCESS_PAGE = "/secret"
const LOGIN_FAILURE_PAGE = "/notfound"

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain:"angeltorres.auth0.com",
        clientID:"R5lgNAkBINJTDLBkiEzlKGO5eOmpl3va",
        redirectUri:"http://localhost:3000/callback",
        audience: "https://angeltorres.auth0.com/userinfo",
        responseType:"token id_token",
        scope:"openid"
    });

    // auth0 = new auth0.WebAuth({
    //     domain:process.env.REACT_APP_DOMAIN,
    //     clientID:process.env.REACT_APP_CLIENT_ID,
    //     redirectUri:process.env.REACT_APP_REDIRECTURI,
    //     audience:process.env.REACT_APP_AUDIENCE,
    //     responseType:process.env.REACT_APP_RESPONSE_TYPE,
    //     scope:process.env.REACT_APP_SCOPE
    // });
    
    constructor() {
        this.login = this.login.bind(this);
    }
    
    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash( (err, authResults)=> {
            if(authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn * 1000 + new Date().getTime));
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.path = LOGIN_SUCCESS_PAGE
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
};