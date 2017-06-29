import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {CounterService} from "./counter.service";
import {VisitorsService} from "./visitors.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CounterComponent],
  providers:[CounterService, VisitorsService],
  exports: [CounterComponent]
})

export class CounterModule { }
