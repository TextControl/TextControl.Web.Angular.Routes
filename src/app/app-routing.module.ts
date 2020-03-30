import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextControlComponent } from './textcontrol/textcontrol.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'textcontrol', component: TextControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
