import {Router} from "@angular/router";
import {Bestellung} from "./bestellung/bestellung.interface";
import {Injectable} from "@angular/core";
import {AppModule} from "./app.module";

@Injectable()
export class StoreService {
  private bestellung: Bestellung = {id: 0, totalprice: 0, artikles: []};

  constructor(private router: Router) {

  }

  storeBestellung(bestellung: Bestellung) {
    this.bestellung = bestellung;
  }

  getBestellung(): Bestellung {
    return this.bestellung;
  }
}
