import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { GetTwoComponent } from './get-two/get-two.component';

const routes: Routes = [
  {path: 'client', component: GetComponent},
  {path: 'client-2', component: GetTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
