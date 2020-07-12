import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologicalComponent } from './astrological.component';

describe('AstrologicalComponent', () => {
  let component: AstrologicalComponent;
  let fixture: ComponentFixture<AstrologicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrologicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
