import React, { Component } from 'react';

//Assets
import google from './google.png'

import config from '../config';
import {Image, MenuItem} from 'react-bootstrap';
import decode from 	'jwt-decode';
import axios from  'axios';

class GoogleLogin extends Component{
    constructor(props) {
        super(props);
        
        this.state={
        	loggedIn:false,
        	name:''
    }
    this.logout=this.logout.bind(this);
    this.isLoggedIn=this.isLoggedIn.bind(this);
    this.getToken=this.getToken.bind(this);
    this.setToken=this.setToken.bind(this);
    this.isTokenExpired=this.isTokenExpired.bind(this);
 }
    
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)	
        })();    
    }
   
    
    //Triggering login for google
    googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log( e )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                    this.setToken(e["access_token"])
                    this.sendToServer(e["id_token"])
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
    	console.log(accesstoken)
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
       
			
        e.execute(function(e) {
        	this.setState({loggedIn:true, name:e.displayName});
        	
        	
            if (e.error) {
            	
                console.log(e.message);
                console.log('Import error - Error occured while importingdata')
                return
            
            } else if (e.id) {
                //Profile data
                this.props.callbackFromHeader(this.state.name );                
                
                return;
            }
        }.bind(this));
    }
    
  isLoggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }
  
    
	getToken(){
		return localStorage.getItem('id_token')
	}  
	
	setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }
    		
	isTokenExpired(token) {
        try {
            const decoded = decode(token);
            
            
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    sendToServer(id_token){
    	/*var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:5000/tokensignin');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onload = function() {
  			console.log( xhr.responseText);
		};
		xhr.send('idtoken=' + id_token)*/
		axios.post("http://localhost:5000/tokensignin",  {idtoken:id_token}).
				then(function (response) {
    			console.log(response);
 			 })
  				.catch(function (error) {
    			console.log(error);
  });
    }
     
    logout=() => {
    	this.setState({loggedIn:false})
    	 localStorage.removeItem('id_token')
    }
    getProfile(accesstoken) {
        // Using jwt-decode npm package to decode the token
        axios.post("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+accesstoken)
        .then
        		(response=>
        		console.log(response)     )   
        
    }
    
    
    render(){
    		const loggedIn=this.state.loggedIn;
    		
    		console.log("isLoggedIn() "+this.isLoggedIn());
    		const button= loggedIn?
    		(<MenuItem src={google} title="google login" alt="google" onClick={ () => this.logout() }>Logout</MenuItem>):
    		(<MenuItem src={google} title="google login" alt="google" onClick={ () => this.googleLogin() }>Google Login</MenuItem>);
    		
        return(
            <div> {button}</div>
        )
    }
}

export default GoogleLogin;