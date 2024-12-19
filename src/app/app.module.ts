import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KatalogComponent } from './katalog/katalog.component';
import { BestellungComponent } from './bestellung/bestellung.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routig.module";
import {StoreService} from "./store.service";

@NgModule({
  declarations: [
    AppComponent,
    KatalogComponent,
    BestellungComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
