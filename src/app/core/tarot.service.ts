import { Injectable } from '@angular/core';
import { tarotCards } from './models/tarot';
import { QuickCard } from './models/spreads';

@Injectable({
  providedIn: 'root'
})
export class TarotService {
  checked = false;
  spread: any;

  constructor() {}

  shuffle() {
    console.log(tarotCards);
    for (let i = tarotCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tarotCards[i];
      tarotCards[i] = tarotCards[j];
      tarotCards[j] = temp;
    }
    console.log(tarotCards);
  }

  dealCards(givenSpread: any) {
    this.spread = givenSpread;
    this.shuffle();

    for (let i = 0; i < this.spread.length; i++) {
      this.spread[i].tarotName = tarotCards[i].name;
      this.spread[i].img = tarotCards[i].imgUrl;
      this.spread[i].tarotDesc = tarotCards[i].description;
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

  dealCard(): QuickCard {
    this.shuffle();
    const quickCard = {
      title: '',
      img: tarotCards[0].imgUrl,
      tarotName: tarotCards[0].name,
      tarotDesc: tarotCards[0].description,
      tarotAstroTitle: tarotCards[0].astro.name,
      tarotAstroSymbol: tarotCards[0].astro.symbol
    };
    return quickCard;
  }

  clear() {
    this.checked = false;
  }
}
