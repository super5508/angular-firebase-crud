import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
