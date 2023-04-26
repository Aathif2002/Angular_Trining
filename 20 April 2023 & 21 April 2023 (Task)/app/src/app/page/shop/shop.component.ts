import { Component } from '@angular/core';
import { ShopService } from './service/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  type=[
    "All",
    "Electronics",
    "Books",
    "Groceries",
    "Cosmetics"
  ]
  selected="All";
  productlist:any;
  min_v=1;
  max_v=10000;

      constructor(private hs:ShopService){
        this.hs.getServices().subscribe(
          {
            next: (data:any)=> this.productlist = data,
            error: ()=> this.productlist=[]
          }
        )
      }

}
