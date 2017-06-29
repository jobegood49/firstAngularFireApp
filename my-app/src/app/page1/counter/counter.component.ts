import { Component, OnInit } from '@angular/core';
import {CounterService} from "./counter.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']

})
export class CounterComponent implements OnInit {

  count: BehaviorSubject<number>;
  flag: BehaviorSubject<boolean>

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.count = this.counterService.get();
    this.flag = this.counterService.getFlag();
  }

  plus(){
    this.counterService.plusOne();
  }

  minus() {
    this.counterService.minusOne();
  }



}
