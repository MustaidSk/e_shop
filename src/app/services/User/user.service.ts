import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private signUpUrl = "http://localhost:8000/api/users/signup";
 private loginUrl = "http://localhost:8000/api/users/login";

  constructor(private httpClient : HttpClient) { 
    
  }
  
  signUp(user : User){
     return this.httpClient.post(this.signUpUrl , user)
     .pipe(
       map(result => {
        return <{message : string}>result
       })
     )
  }

  login(credentials : {email : string , password : string})
  {
    debugger
    return this.httpClient.post(this.loginUrl , credentials)
    .pipe (
      map(result =>{
          return<loginResponse>result
      })
    )
  }
}
interface loginResponse{
  message : string,
  token : string
}