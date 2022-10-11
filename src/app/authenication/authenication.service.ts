import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { map, Subject } from 'rxjs';
import { API } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  isLoggedin:boolean=false;
   isLogged=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
   const body={
      email:email,
      password
    }
     return this.http.post(API.auth,body).pipe(
     map((res:any) =>{
       this.isLoggedin=true;
       this.isLogged.next(this.isLoggedin);
       const token=res.token;
       localStorage.setItem('token',token);
       return true;
     })
    );
  }

  isUserLoggedIn(){
    if(localStorage.getItem('token'))
       this.isLoggedin=true;
    return this.isLoggedin;
  }

  logout(){
    this.isLoggedin=false;
    this.isLogged.next(this.isLoggedin);
    localStorage.removeItem('token');
  }
}
