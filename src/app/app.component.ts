import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Country_Products';
  // direction:string='ltr';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(translate.getBrowserLang() as string);
    localStorage.setItem('lang', 'en');
    //  translate.onLangChange.subscribe(event => {
    //    this.direction=localStorage.getItem('lang')==='ar'?'rtl':'ltr';
    //  });
    //  console.log('translate.currentLang'+translate.currentLang);
    //  console.log('getBrowserLang='+translate.getBrowserLang());
    //  console.log(translate.getDefaultLang());

    // translate.get('GET_STARTED').subscribe(tr => console.log('get='+tr['GET_STARTED']))
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.removeItem('lang');
    localStorage.setItem('lang', lang);
    document.dir=lang==='en'?'ltr':'rtl';
  }
}
