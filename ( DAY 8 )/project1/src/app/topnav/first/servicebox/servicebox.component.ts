import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-servicebox',
  templateUrl: './servicebox.component.html',
  styleUrls: ['./servicebox.component.css']
})
export class ServiceboxComponent {
   
    @Input() title:string=""
    @Input() description:string=""
  }


