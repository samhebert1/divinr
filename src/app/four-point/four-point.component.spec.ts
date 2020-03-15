import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPointComponent } from './four-point.component';

describe('FourPointComponent', () => {
  let component: FourPointComponent;
  let fixture: ComponentFixture<FourPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
