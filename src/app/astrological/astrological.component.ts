import { Component, OnInit } from '@angular/core';
import { TarotService } from '../core/tarot.service';
import { TwelveCards, twelveCards } from '../core/models/spreads';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'divinr-astrological',
  templateUrl: './astrological.component.html',
  styleUrls: ['./astrological.component.scss']
})
export class AstrologicalComponent implements OnInit {
  public isMobile = false;
  newTwelve: TwelveCards[];
  checked = false;

  constructor(private tarotSvc: TarotService, brkPntObsvr: BreakpointObserver) {
    brkPntObsvr.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {}

  startReading() {
    this.newTwelve = this.tarotSvc.dealCards(twelveCards);
    this.checked = true;
    console.log(this.newTwelve);
  }

  exportToLeximancy() {
    const url = this.tarotSvc.getLeximancyUrl('as', this.newTwelve);
    window.open(url, '_blank');
  }

  clear() {
    this.tarotSvc.clear();
    this.checked = false;
  }
}
