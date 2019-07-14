import auth0 from "auth0-js";
import Login from "./views/Login";

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
};