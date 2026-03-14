import { Component, OnInit } from '@angular/core';
import { TarotService } from '../core/tarot.service';
import { FourCards, fourCards } from '../core/models/spreads';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'divinr-elemental',
  templateUrl: './elemental.component.html',
  styleUrls: ['./elemental.component.scss']
})
export class ElementalComponent implements OnInit {
  public isMobile = false;
  checked = false;
  newFour: FourCards;
  positions = [
    'Soul/Psyche',
    'Thoughts',
    'Heart',
    'Physical/Presence'
  ];

  constructor(private tarotSvc: TarotService, brkPntObsvr: BreakpointObserver) {
    brkPntObsvr.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {}

  startReading() {
    this.newFour = this.tarotSvc.dealCards(fourCards);
    this.checked = true;
    console.log(this.newFour);
  }

  exportToLeximancy() {
    // newFour is typed as FourCards but it's assigned the result of dealCards, which is an array
    const url = this.tarotSvc.getLeximancyUrl('er', this.newFour as any);
    window.open(url, '_blank');
  }

  clear() {
    this.tarotSvc.clear();
    this.newFour.tarotAstroTitle = '_';
    this.checked = false;
  }
}
