import { Component, OnInit } from '@angular/core';
import { TarotService } from '../core/tarot.service';
import { TwelveCards, twelveCards } from '../core/models/spreads';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-full-house',
  templateUrl: './full-house.component.html',
  styleUrls: ['./full-house.component.scss']
})
export class FullHouseComponent implements OnInit {
  public isMobile = false;
  newTwelve: TwelveCards[];
  checked = false;

  constructor(private tarotSvc: TarotService, brkPntObsvr: BreakpointObserver) {
    brkPntObsvr.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {}

  startReading() {
    this.newTwelve = this.tarotSvc.dealCards(twelveCards);
    this.checked = true;
    console.log(this.newTwelve);
  }

  clear() {
    this.tarotSvc.clear();
    this.checked = false;
  }

}
