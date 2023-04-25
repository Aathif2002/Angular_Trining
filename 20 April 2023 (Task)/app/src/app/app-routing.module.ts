import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './common/navbar/feedback/feedback.component';
import { HomeComponent } from './common/navbar/home/home.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"feedback", component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
