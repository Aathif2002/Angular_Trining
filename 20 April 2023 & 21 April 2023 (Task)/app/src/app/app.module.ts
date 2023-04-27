import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ShopComponent } from './page/shop/shop.component';
import { ShopBoxComponent } from './page/shop/shop-box/shop-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TypefilterPipe } from './pipe/typefilter.pipe';
import { PricefilterPipe } from './pipe/pricefilter.pipe';
import { FeedbackComponent } from './feedback/feedback.component';
import { DetailsComponent } from './page/shop/details/details.component';
import { FeedbackFormComponent } from './page/shop/feedback-form/feedback-form.component';
import { FeedbackBoxComponent } from './page/shop/feedback-box/feedback-box.component';
import { BoxComponent } from './page/shop/feedback-box/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ShopBoxComponent,
    TypefilterPipe,
    PricefilterPipe,
    FeedbackComponent,
    DetailsComponent,
    FeedbackFormComponent,
    FeedbackBoxComponent,
    BoxComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
