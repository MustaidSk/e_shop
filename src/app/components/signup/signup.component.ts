import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error :string;
  success : string;
  constructor(private userService : UserService ,
    private router : Router) { }

  ngOnInit() {
  }

  navigateToLogin()
  {
    this.router.navigate(['login']);
  }

  userForm(form :HTMLFormElement)
  {
    let name = (<HTMLFormElement>form.elements.namedItem('name')).value
    let email = (<HTMLFormElement>form.elements.namedItem('email')).value
    let phone = (<HTMLFormElement>form.elements.namedItem('phone')).value
    let password = (<HTMLFormElement>form.elements.namedItem('password')).value
 let user : User ={
   name,
   email,
   password,
   phone
 }
 return user;
  }
  signUp(event : Event){
    event.preventDefault();
    console.log(event.target);
    let form = <HTMLFormElement>event.target;
    let user = this.userForm(form);
    console.log(user);
    this.userService.signUp(user).subscribe(
      {  
        next : (result) =>
        {
        console.log(result);
        this.success = result.message;
        this.error = undefined;
        this.navigateToLogin();
        },
        error : (errorResponse : HttpErrorResponse) =>
        {
        console.log(errorResponse);
         this.error= errorResponse.error.error.message;
         this.success = undefined;
        }
      }
    )
  }

}
