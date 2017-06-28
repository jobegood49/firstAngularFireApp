import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
      <ul>
        <li *ngFor="let item of items | async">
          {{ item.name }}
        </li>
      </ul>
    `


  })
  export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('users');
      this.items.subscribe((a) => {
      console.log(a);
    });
  }
}