import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import { ShortenPipe } from './shorten.pipe';
import { MyCapPipe } from './my-cap.pipe';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'products/:fruits',component:ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShortenPipe,
   
    MyCapPipe,
         HomeComponent,
         ProductsComponent,
         FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
