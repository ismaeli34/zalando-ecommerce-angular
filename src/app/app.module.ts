import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { AdminModule } from './Module/admin/admin.module';
import { AuthModule } from './Module/auth/auth.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './State/Auth/auth.reducer';
import { userReducer } from './State/User/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/Cart/cart.reducer';
import { orderReducer } from './State/Order/order.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      product: productReducer,
      cart: cartReducer,
      order:orderReducer
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
