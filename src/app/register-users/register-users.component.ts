import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
registerForm:FormGroup
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required && Validators.email]),
      password: new FormControl('', [Validators.required && Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }
registerUser(){
  this.auth.register(this.registerForm.value).subscribe(() =>{
  this.router.navigate(['/']);
  },
  (err)=>{
    alert(err.error.message);
    
  })
}

}
