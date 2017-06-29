import { Component, OnInit } from '@angular/core';
import {Shoe} from "../shoe.model";

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[] = [
    new Shoe("Air Jordan XVI", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/pyycmqkovwqpd2zimq2d.jpg"),
    new Shoe("Air Jordan XV", "IN THE YEAR 2000... Jordan Brand will release an Air Jordan that could have been worn by the Keebler Elves. Inspired by Prada Sport shoes, the X-15 rocket plane","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/iylj7zddiuorstgk55ef.jpg"),
    new Shoe("Air Jordan Retro III ", "This might come as a surprise, but an Air Jordan III featuring brown elephant print on a mostly white upper wasn't an immediate hit. Much like the ginger XVIs","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/xnnqdkb8me9in752mqeq.jpg"),
    new Shoe("Air Jordan XX1", "The leather Air Jordan XX1s were nothing to write home about, but D'Wayne Edwards's design was bananas in Varsity Red suede.","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/dpk7jkrezhmvyq2ud0bk.jpg"),
    new Shoe(" Air Jordan 2011", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/alsj814bkso1xdwqeste.jpg"),
    new Shoe("Air Jordan XVI", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/apsfdmis5okco5zlbmxp.jpg"),
    new Shoe(" Air Jordan 2011", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/fz6jaltd6gcpdhpj1rry.jpg"),
    new Shoe("Air Jordan XVI", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/exgbuzh6heo8uqxo1ytm.jpg"),
    new Shoe(" Air Jordan 2011", "Worn by Mike as a Wizard, the Air Jordan XVI was a rarity","http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/xdwi5bwapmwknsmolqps.jpg"),


  ];

  constructor() { }

  ngOnInit() {
  }

}
