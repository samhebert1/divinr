import { Injectable } from '@angular/core';
import { tarotCards } from './models/tarot';
import { QuickCard } from './models/spreads';

@Injectable({
  providedIn: 'root'
})
export class TarotService {
  checked = false;
  spread: any;
  originalTarotCards: any[] = [];

  constructor() {
    // Save original index for each card
    this.originalTarotCards = [...tarotCards];
    tarotCards.forEach((card, index) => {
      card.id = index;
    });
  }

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
      this.spread[i].id = tarotCards[i].id;
    }
    this.checked = true;
    return this.spread;
  }

  dealCard(): QuickCard {
    this.shuffle();
    const quickCard = {
      id: tarotCards[0].id,
      title: '',
      img: tarotCards[0].imgUrl,
      tarotName: tarotCards[0].name,
      tarotDesc: tarotCards[0].description,
      tarotAstroTitle: tarotCards[0].astro.name,
      tarotAstroSymbol: tarotCards[0].astro.symbol
    };
    return quickCard;
  }

  getLeximancyUrl(spreadType: string, cards: any[]): string {
    const cardIds = cards.map(c => c.id).join(',');
    return `https://leximancy.web.app/experimental?spread=${spreadType}&cards=${cardIds}`;
  }

  clear() {
    this.checked = false;
  }
}
