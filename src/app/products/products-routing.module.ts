import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONFIG, GetProductsResolver } from '../shared';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:CONFIG.products.name},
  {path:CONFIG.products.name,component:ProductsComponent,
  //   resolve:{
  //     products:GetProductsResolver
  //  },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
