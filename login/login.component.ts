import { Component, OnInit } from '@angular/core';
//import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:Form={
    email:'',
    password:''
  }
  red1=false;
  red2=false;
  constructor(private router:Router) { }
  checkEmail:string='Raj';
  checkPassword:string='1332';

isEmailfilled:boolean=false;
isPassfilled:boolean=false;
  ngOnInit(): void {
  }

validate(){
  if(this.form.email!=this.checkEmail){
    alert('Incorrect User name');
  }
  else if(this.form.password!=this.checkPassword){
    alert('Incorrect password');
  }
  else{
    alert("Login Successful..!!");
    this.router.navigateByUrl('/fileupload');
  }
}

}