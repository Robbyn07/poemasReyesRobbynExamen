import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePoemsPageRoutingModule } from './create-poems-routing.module';

import { CreatePoemsPage } from './create-poems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePoemsPageRoutingModule
  ],
  declarations: [CreatePoemsPage]
})
export class CreatePoemsPageModule {}
