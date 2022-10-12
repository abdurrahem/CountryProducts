import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function createTranslateLoaderFactory(http:HttpClient){
//   return new TranslateHttpLoader(http,'./assets/langs/','.json');
// }
@NgModule({
  declarations: [
    ProductsComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    // TranslateModule.forChild({
    //   // loader:{
    //   //   provide:TranslateLoader,
    //   //   useFactory:(createTranslateLoaderFactory),
    //   //   deps:[HttpClient]
    //   // },
    //   extend:true,
    //   isolate:false
    // })
  ]
})
export class ProductsModule { }
