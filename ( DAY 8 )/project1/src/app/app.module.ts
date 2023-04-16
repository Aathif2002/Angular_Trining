import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FirstComponent } from './topnav/first/first.component';
import { ServiceboxComponent } from './topnav/first/servicebox/servicebox.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FirstComponent,
    ServiceboxComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
