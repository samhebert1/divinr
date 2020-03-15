import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHouseComponent } from './full-house.component';

describe('FullHouseComponent', () => {
  let component: FullHouseComponent;
  let fixture: ComponentFixture<FullHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
