import { NgStyle } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form : any;
error :string;
  success : string;
  constructor(private userservice : UserService,
    private router : Router) { }

  ngOnInit() {
  }

  navigateToHome()
  {
    this.router.navigate(['/home']);
  }
  userForm ()
  {
    let email = (<HTMLFormElement>this.form.elements.namedItem('email')).value;
    let password = (<HTMLFormElement>this.form.elements.namedItem('password')).value

    // console.log('email',{email,
    // password});

    let credentials ={
      email,
      password,
      }
 this.userservice.login(credentials).subscribe({
   next : (result) =>
   {
  console.log(result);
  this.success = result.message;
  this.error = undefined;
  this.navigateToHome();
   },
   error : (errorResponse : HttpErrorResponse) =>{
     debugger
     console.log(errorResponse.error);
     this.error = errorResponse.error.error.message

   }
 })      
  }

  login(event : Event)
  {
    event.preventDefault();
    this.form = <HTMLFormElement>event.target;
    this.userForm();
  }

}
