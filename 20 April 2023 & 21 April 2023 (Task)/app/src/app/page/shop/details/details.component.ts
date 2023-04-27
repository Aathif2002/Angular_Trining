import { Component } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  complaints:any;
   details:any;
  constructor(private hs:ShopService,private ar:ActivatedRoute){
    this.hs.getFeedback().subscribe({
      next:(data:any)=>this.complaints=data,
      error:()=>this.complaints=[]
    })
    this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )
  }

  readData(){


     this.hs.getDetails(this.id).subscribe({
         next: (data:any)=> this.details =data,
         error: ()=> this.details = {}
     })
  }
    
}



