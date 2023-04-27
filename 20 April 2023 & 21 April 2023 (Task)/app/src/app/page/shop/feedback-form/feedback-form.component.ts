import { Component } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  feedbackForm:any;
  constructor(private fb:FormBuilder,private fs:FeedbackService){
    this.feedbackForm = this.fb.group({
       name:['',[Validators.required,Validators.minLength(3)]],
       message:['',[Validators.required,Validators.minLength(15)]],
       email:['',[Validators.required, Validators.pattern(
         "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
         
    
     });
    }

    saveFeedback(){

     
     var temp:any={
       id: Math.round(Math.random()*10000),
       name: this.feedbackForm.value.name,
       email: this.feedbackForm.value.email,
       message: this.feedbackForm.value.message,
       type:this.feedbackForm.value.type,
       
     
     }
     this.fs.postFeedback(temp).subscribe(
      { 
       next: data=>{
         alert('Your Feedback is saved')
         location.reload();
       },
       error:(error)=>alert('Not saved ---some Error')
     }
 
     )
 
   }
 
}



