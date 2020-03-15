import { Injectable } from '@angular/core';
import { tarotCards } from './models/tarot';

@Injectable({
  providedIn: 'root'
})
export class TarotService {
  checked = false;
  spread: any;

  shuffle() {
    for (let i = tarotCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tarotCards[i];
      tarotCards[i] = tarotCards[j];
      tarotCards[j] = temp;
    }
  }

  dealCards(givenSpread: any) {
    this.spread = givenSpread;
    this.shuffle();

    for (let i = 0; i < this.spread.length; i++) {
      this.spread[i].tarotName = tarotCards[i].name;
      this.spread[i].img = tarotCards[i].imgUrl;
      this.spread[i].description = tarotCards[i].description;
      if (tarotCards[i].astro != null) {
        this.spread[i].tarotAstroTitle = tarotCards[i].astro.name;
        this.spread[i].tarotAstroSymbol = tarotCards[i].astro.symbol;
      } else {
        this.spread[i].tarotAstroTitle = '_';
        this.spread[i].tarotAstroSymbol = '_';
      }
    }
    this.checked = true;
    return this.spread;
  }

  clear() {
    this.checked = false;
  }

}
