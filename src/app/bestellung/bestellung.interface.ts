import {Artikle} from "../katalog/artikle.interface";

export interface Bestellung {
  id: number;
  totalprice: number;
  artikles: Artikle[];
}
