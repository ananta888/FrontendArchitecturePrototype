import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BestellungComponent} from "./bestellung/bestellung.component";
import {KatalogComponent} from "./katalog/katalog.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Standardroute
  { path: 'bestellung', component: BestellungComponent },
  { path: 'home', component: KatalogComponent },
  { path: 'katalog', component: KatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
