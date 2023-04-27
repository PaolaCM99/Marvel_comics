import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConstans } from '../constants/routes';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: RouterConstans.HOME,
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
