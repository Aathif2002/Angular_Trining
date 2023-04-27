import { Component } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent {
  complaints:any;
  constructor(private fs:FeedbackService)  {
    this.fs.getFeedback().subscribe(
       {
           next : (data:any)=> this.complaints =data,
           error:()=>this.complaints=[]
       }
    )
 }
  
}
