import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenicationComponent } from './authenication/authenication.component';
import { HomeComponent } from './Home/home.component';
import { CONFIG } from './shared';
import { GetProductsResolver } from './shared';
import { ProductsGuard } from './shared/guards/products.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: CONFIG.home.name },
  { path: CONFIG.home.name, component: HomeComponent },
  { path: CONFIG.login.name, component: AuthenicationComponent },
  {
    path: CONFIG.products.name, loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    resolve: {
      products: GetProductsResolver
    },
    canActivate: [ProductsGuard]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
