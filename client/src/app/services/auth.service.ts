import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  user: any;

  constructor( private http:Http) { }

  //set the header
  //post request to register
  createUser(user){
  	var headers = new Headers();
  	headers.append('Content-Type','application/json');

  	return this.http.post('http://localhost:8080/users/',user,{headers:headers})
  		.map(res => res.json());
  }


  //set headers
  //load token
  //get request to backend
  getUser(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    //remove localhost:3001 for prod
    return this.http.get('http://localhost:8080/users/',{headers:headers})
      .map(res => res.json());
  }



  //get all users from api
  getAllUsers(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    //remove localhost:3001 for prod
    return this.http.get('http://localhost:8080/users/',{headers:headers})
      .map(res => res.json());
  }




  //get user with id
  getUserWithId(id){
    console.log('getting user')

    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:8080/users/'+id,{headers:headers})
      .map(res => res.json());
  }




  //updated user from form
  updatedUser(id,updatedUser){
    var headers = new Headers();
    
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:8080/users/'+id,updatedUser,{headers:headers})
      .map(res => res.json());
  }





}
