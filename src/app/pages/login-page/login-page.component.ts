import { Component, OnInit } from '@angular/core';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginWithKeycloak(): void{
    //redirect to keycloak to login
    //console.log("hello");
    keycloak.login()
  }

  logoutWithKeycloak(): void{
    //redirect to keycloak to logout
    keycloak.logout()
  }

  ShowToken(){
   console.log(keycloak.token);
   console.log(keycloak.tokenParsed);  
  }
}
