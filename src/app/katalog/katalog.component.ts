import { Component, inject, DestroyRef } from '@angular/core';
import { Artikle } from "./artikle.interface";
import { Bestellung } from "../bestellung/bestellung.interface";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { StoreService } from "../store.service";
import { takeUntil, Subject } from "rxjs";

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css']
})
export class KatalogComponent {
  private destroy$ = new Subject<void>();

  artikles: Artikle[] = [];
  showArtikles: Artikle[] = [];
  bestellung: Bestellung = { artikles: [], id: 0, totalprice: 0 };

  constructor(private router: Router, private routing: ActivatedRoute, private store: StoreService) {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.destroy$.next());
  }

  ngOnInit() {
    this.artikles.push({ id: "1", name: "ganja", price: 5, selected: false });
    this.artikles.push({ id: "2", name: "cannabis", price: 10, selected: false });
    this.artikles.push({ id: "3", name: "pott", price: 3, selected: false });
    this.artikles.push({ id: "4", name: "peace", price: 8, selected: false });
    this.artikles.push({ id: "5", name: "hash", price: 12, selected: false });
    this.showArtikles = this.artikles;

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation abgeschlossen:', event);
        this.handleNavigation();
      }
    });
    this.handleNavigation();
  }

  toggleSelection(article: Artikle) {
    article.selected = !article.selected;
    const match = this.artikles.find(a => a.id === article.id);

    if (article.selected) {
      this.bestellung.artikles.push(article);
    } else {
      this.bestellung.artikles = this.bestellung.artikles.filter(item => article.id !== item.id);
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  filter() {
    this.router.navigate([], { queryParams: { minprice: 5, maxprice: 10 } });
  }

  checkout() {
    this.store.storeBestellung(this.bestellung);
    this.navigateTo('bestellung');
  }

  private handleNavigation() {
    const minprice = +(this.routing.snapshot.queryParamMap.get('minprice') || 0);
    const maxprice = +(this.routing.snapshot.queryParamMap.get('maxprice') || 0);

    if (minprice === 0 && maxprice === 0) {
      this.showArtikles = this.artikles;
    } else {
      this.showArtikles = this.artikles.filter(artikle =>
        artikle.price >= minprice && artikle.price <= maxprice
      );
    }
  }
}
