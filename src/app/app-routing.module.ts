import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FichasComponent } from './views/lista-fichas/fichas.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fichas",
    component: FichasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
