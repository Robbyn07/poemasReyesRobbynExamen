import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePoemsPage } from './create-poems.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePoemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePoemsPageRoutingModule {}
