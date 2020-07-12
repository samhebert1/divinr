import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickReadComponent } from './quick-read.component';

describe('QuickReadComponent', () => {
  let component: QuickReadComponent;
  let fixture: ComponentFixture<QuickReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
