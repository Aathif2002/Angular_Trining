import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BackgroundComponent } from './topnav/background/background.component';
import { ServiceComponent } from './topnav/background/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BackgroundComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
