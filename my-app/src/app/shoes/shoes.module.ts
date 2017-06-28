import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoesComponent, ShoeDetailComponent]
})
export class ShoesModule { }
