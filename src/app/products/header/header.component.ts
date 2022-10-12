import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenicationService } from '../../authenication/authenication.service';
import { CONFIG, ICountry, ProductsService } from '../../shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries: ICountry[] = [];
  loginError: boolean = false;
  name: string = 'Select Country';
  icon: string = '';

  constructor(private productsService: ProductsService, private router: Router, private authService: AuthenicationService) { }
  isLoggedIn: boolean = this.authService.isLoggedin;

  ngOnInit(): void {
    ////get the countries data from API
    this.productsService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
    this.authService.isLogged.subscribe(status => {
      this.isLoggedIn = status;
      if (status)
        this.loginError = !status;
    });
  }

  //navigate
  selectCountry(country: ICountry) {
    if (this.authService.isLoggedin) {
      
      this.router.navigate([CONFIG.products.route],
        {
          queryParams: {   ///send params
            country_id: country.country_id || 0,
            currency: country.currency || "",
            country_code: country.country_code || "",
            decimals:country.decimal
          }
        });
      this.name = country?.name || "Select Country";
      this.icon = country?.icon || "";
      this.loginError = false;
    }
    else {
      this.loginError = true;
    }

  }
  ///login
  login() {
    this.router.navigate([CONFIG.login.route]);

  }
  //logout
  logout() {
    this.router.navigate([CONFIG.login.route]);
    this.authService.logout();
    this.icon = '';
    this.name = 'Select Country';
    // this.loginError=false;
  }
}
