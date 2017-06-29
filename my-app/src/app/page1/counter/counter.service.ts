import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {VisitorsService} from "./visitors.service";

@Injectable()
export class CounterService {
  private count :BehaviorSubject<number>;
  private flag :BehaviorSubject<boolean>;
  private startValue;

  constructor(public visitors :VisitorsService) {
    this.count = new BehaviorSubject(0);
    this.flag = new BehaviorSubject(true);

    this.visitors.items
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
          this.startValue = snapshot.val();
          this.count.next(this.startValue);
          this.flag.next(false);
        });
      })

    /*this.visitors.get().then((value) => {
      this.startValue = value;
      this.count.next(this.startValue);
      this.flag.next(false);
    });
    */

  }

  get(){
    return this.count;
  }

  getFlag() {
    return this.flag;
  }

  plusOne() {
    return this.count.next(this.startValue++);
  }

  minusOne() {
    return this.count.next(this.startValue--);
  }

}
