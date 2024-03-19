import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Feature1RoutingModule,
   FormsModule,
   ReactiveFormsModule,
   MatTooltipModule
  ]
})
export class Feature1Module { 
  constructor(){}
}
