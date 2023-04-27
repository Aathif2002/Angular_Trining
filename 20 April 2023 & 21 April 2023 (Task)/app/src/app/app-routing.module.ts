import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FeedbackComponent } from './feedback/feedback.component';
import { ShopComponent } from './page/shop/shop.component';
import { DetailsComponent } from './page/shop/details/details.component';



const routes: Routes = [
  {path:"",component:ShopComponent},
  {path:"feedback", component:FeedbackComponent},
  {path:"products/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
