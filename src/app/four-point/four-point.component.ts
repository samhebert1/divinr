import { Component, OnInit } from '@angular/core';
import { TarotService } from '../core/tarot.service';
import {FourCards, fourCards } from '../core/models/spreads';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-four-point',
  templateUrl: './four-point.component.html',
  styleUrls: ['./four-point.component.scss']
})
export class FourPointComponent implements OnInit {
  public isMobile = false;
  checked = false;
  newFour: FourCards;

  constructor(private tarotSvc: TarotService, brkPntObsvr: BreakpointObserver) {
    brkPntObsvr.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {}

  startReading() {
    this.newFour = this.tarotSvc.dealCards(fourCards);
    this.checked = true;
    console.log(this.newFour);
  }

  clear() {
    this.tarotSvc.clear();
    this.newFour.tarotAstroTitle = '_';
    this.checked = false;
  }

}
