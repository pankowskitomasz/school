import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoComponent } from './promo/promo.component';

const routes: Routes = [
  {
    path:"promo",
    component:PromoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
