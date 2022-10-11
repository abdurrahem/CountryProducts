import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationService } from 'src/app/authenication/authenication.service';
import { CONFIG } from '../configs/routes';

@Injectable({
  providedIn: 'root'
})
export class ProductsGuard implements CanActivate {
  constructor(private authService: AuthenicationService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedin){
        return true;
      }
      else{
        this.router.navigate([CONFIG.login.route]);
        return false;
      }
  }
  
}
