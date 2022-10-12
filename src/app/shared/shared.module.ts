import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyDecimalPointsPipe } from './pipes/currency-decimal-points.pipe';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
  
    CurrencyDecimalPointsPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[ProductsService],
  exports:[
    CurrencyDecimalPointsPipe,
    TranslateModule
  ]
})
export class SharedModule { }
