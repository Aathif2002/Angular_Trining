import { Component } from '@angular/core';
import {datafeilds}  from './datainfo'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'O U R  P R O D U C T';
  services:string[] =datafeilds.servicelist;
  descriptions:string[]=
  [
    datafeilds.seo,
    datafeilds.branding,
    datafeilds.logo
  ]
}
