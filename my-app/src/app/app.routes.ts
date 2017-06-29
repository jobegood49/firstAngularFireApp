import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {ShoeListComponent} from "./shoes/shoe-list/shoe-list.component"

export const appRoutes: Routes = [
  { path: 'page1', component: Page1Component},
  { path: 'shoes', component: ShoeListComponent},
];
