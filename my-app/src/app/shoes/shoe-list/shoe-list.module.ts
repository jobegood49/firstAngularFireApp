import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeListComponent } from './shoe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoeListComponent],
  exports: [ShoeListComponent]
})
export class ShoeListModule { }
