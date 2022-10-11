import { Injectable } from '@angular/core';
import { ICountry, IProduct } from '..';
import { HttpClient } from '@angular/common/http';
import { API } from '..';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
enum Currency { Kuwait = 'KWD', UAE = 'AED', Bahrain = 'BHD', KSA = 'SAR', Qatar = 'QAR' };
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  countries: ICountry[] = [];
  // selectedCountry!: ICountry;
  products: IProduct[] = [];

  constructor(private http: HttpClient, private router: Router) { }
  // get countries data from countries API
  getCountries() {
    return this.http.get(API.countries).pipe(
      map((res: any) => {
        const result: ICountry[] = [];
        res.forEach((country: { [x: string]: any; }) => {
          result.push({
            country_id: country['id'],
            country_code: country['country_code'],
            name: country['name'],
            currency: country['currency'],
            icon: country['icon'],
            decimal:country['decimals']
          });
        });
        this.countries = result;
        return result;

      })
    );
  }
  //get all products from items API 
  getProducts() {
    return this.http.get(API.products).pipe(
      map((res: any) => {
        const result: IProduct[] = [];
        res.forEach((product: { [x: string]: any; }) => {
          result.push({
            id: product['id'],
            name: product['name'],
            price: product['price'],
            country_id: product['country_id'],
            icon: product['icon']
          })
        });
        this.products = result;
        return result;
      })
    )
  }
  // products filtering du to country_id 
  getRelatedToCountryProducts(country_id: number) {
    const result: IProduct[] = [];
    this.products.forEach(product => {
      if (product.country_id == country_id) {
        result.push(product);
      }
    });

    return result;
  }
}
