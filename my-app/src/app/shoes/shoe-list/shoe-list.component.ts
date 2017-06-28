import { Component, OnInit } from '@angular/core';
import {Shoe} from "../shoe.model";

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[] = [
    new Shoe("Air Jordan XVI", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/pyycmqkovwqpd2zimq2d.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
