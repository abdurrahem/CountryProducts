import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from '../shared';
import { AuthenicationService } from './authenication.service';

@Component({
  selector: 'app-authenication',
  templateUrl: './authenication.component.html',
  styleUrls: ['./authenication.component.scss']
})
export class AuthenicationComponent implements OnInit {
  authform:FormGroup;
  error:string='';
  isLoggedIn:boolean=false;
  constructor(private fb:FormBuilder,public authService:AuthenicationService,private router:Router) { 
  this.authform=fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required]
});

  }
  
  ngOnInit(): void {
  }
  login(){
    let email=this.authform?.controls['email'].value;
    let password= this.authform?.controls['password'].value
    this.authService.login(email,password).subscribe(
      isloggedIn => {
        this.isLoggedIn=isloggedIn;
        this.router.navigate([CONFIG.products.route]);
         
      },
      error => {
        this.error=error.error.error;
      }
    );
  }
}
