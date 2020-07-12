import { Component, OnInit } from '@angular/core';
import { TarotService } from '../core/tarot.service';
import { QuickCard } from '../core/models/spreads';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'divinr-quick-read',
  templateUrl: './quick-read.component.html',
  styleUrls: ['./quick-read.component.scss']
})
export class QuickReadComponent implements OnInit {
  public isMobile = false;
  checked = false;
  newCard: QuickCard;

  constructor(private tarotSvc: TarotService, brkPntObsvr: BreakpointObserver) {
    brkPntObsvr.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void { }

  startReading() {
    this.newCard = this.tarotSvc.dealCard();
    this.checked = true;
    console.log(this.newCard);
  }

  clear() {
    this.tarotSvc.clear();
    this.newCard.tarotAstroTitle = '_';
    this.checked = false;
  }




}
