import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductsResolver implements Resolve <IProduct[]> {

  constructor(private productsService:ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct[] | Observable<IProduct[]> | Promise<IProduct[]> {
    return  this.productsService.getProducts();
  }
}
