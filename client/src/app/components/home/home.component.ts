import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  //form data
  name:String;
  username:String;
  email:String;
  password:String;


  constructor(private authService:AuthService, private router:Router ) { }

  ngOnInit() {}


  //submit register form
  onRegisterSubmit(){
  	var user = { name:this.name, username:this.username, email:this.email, password:this.password}
  	 
    //register user
    //flash registered if it works and redirect
    //flash error if it doesnt work
    this.authService.createUser(user).subscribe(data =>{
      if(data.success){
         console.log(data)
      } else {
         console.log('failed')
      }
    });
    
  }




}
