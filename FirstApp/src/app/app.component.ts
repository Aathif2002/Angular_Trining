import { Component } from '@angular/core';
import {datafields}  from './appdata/appinfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'KMA private limited';
  dataitems=datafields
  services:string[] =
  [ "Application Services", 
  "Testing Services",
  "Cloud Services",
]

}
