import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Country_Products';
  
  constructor(private translate:TranslateService){
     translate.addLangs(['en','ar']);
     translate.setDefaultLang('en');
    //  console.log('translate.currentLang'+translate.currentLang);
    //  console.log('getBrowserLang='+translate.getBrowserLang());
    //  console.log(translate.getDefaultLang());
     
    // translate.get('GET_STARTED').subscribe(tr => console.log('get='+tr['GET_STARTED']))
  }
  changeLanguage(lang:string){
    // console.log('language=  '+lang);
    
    this.translate.use(lang);
  }
}
