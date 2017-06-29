import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class VisitorsService {

  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items', { preserveSnapshot: true });
  }


  /*
  db :Promise<number>

  constructor() {

    this.db = new Promise((resolve) => {
      setTimeout(() => {
        resolve(33);
      }, 2000)
    });

  }



  get = () => this.db;

  */

}
