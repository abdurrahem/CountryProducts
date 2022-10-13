import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  selsect: any = {
    'en': "Select country",
    'ar': 'اختر الدولة'
  };
  name: string = '';
  icon: string = '';
  lang: any = '';

  constructor(
    private productsService: ProductsService,
    private router: Router, 
    private authService: AuthenicationService,
    private translateService:TranslateService
    ) { }
  isLoggedIn: boolean = this.authService.isLoggedin;

  ngOnInit(): void {
    ////get the countries data from API
    this.lang=localStorage.getItem('lang');
    this.translateService.onLangChange.subscribe(event =>{
      this.lang=event.lang;
    });
    // this.lang = localStorage.getItem('lang');
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
    // this.lang = localStorage.getItem('lang');
    if (this.authService.isLoggedin) {
      this.router.navigate([CONFIG.products.route],
        {
          queryParams: {   ///send params
            country_id: country.country_id || 0,
            currency: country.currency || "",
            country_code: country.country_code || "",
            decimals: country.decimal
          }
        });
      //  console.log(this.selsect[localStorage.getItem('lang') || 'null']);
      // this.name = country?.name || this.selsect[localStorage.getItem('lang') || 'null']; 
      // this.name = country?.name['en'] || '';
      // if(localStorage.getItem('lang'))
      this.name = (country as any).name[this.lang] || '';
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
