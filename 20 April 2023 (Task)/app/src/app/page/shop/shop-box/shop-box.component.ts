import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-box',
  templateUrl: './shop-box.component.html',
  styleUrls: ['./shop-box.component.css']
})
export class ShopBoxComponent {
  @Input() products:any;
}
