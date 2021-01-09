import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email: new FormControl ('', [Validators.required && Validators.email]),
      password: new FormControl ('', [Validators.required && Validators.minLength(8)])
    })
  }
  get form(){
    return this.loginForm.controls
  }
onSubmit(){
  if(this.loginForm.invalid){
    return;
  }
}
loginUser(){
  this.auth.login(this.loginForm.value).subscribe((res:any)=>{
    localStorage.setItem('token',res.message);
    this.router.navigateByUrl('/');
    console.log(res);
    

  })
}
}
