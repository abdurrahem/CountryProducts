import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
