import { Component } from '@angular/core';
import {Bestellung} from "./bestellung.interface";
import {ActivatedRoute} from "@angular/router";
import {StoreService} from "../store.service";

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent {
  public bestellung: Bestellung = {id: 0, totalprice: 0, artikles: []};

  constructor(private route: ActivatedRoute, private store: StoreService) {
  }

  ngOnInit() {
    this.bestellung = this.store.getBestellung();
  }
}
