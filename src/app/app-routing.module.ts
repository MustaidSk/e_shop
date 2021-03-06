import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';


const routes: Routes = [
  {path : 'home' , component :HomeComponent},
  {path : 'orders' , component :UserOrdersComponent},
  {path : 'cart' , component :CartComponent},
  {path : 'login' , component :LoginComponent},
  {path : 'signup' , component :SignupComponent},
  {path : 'store' , component :StoreComponent},
  // {path : 'home' , component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
