import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementalComponent } from './elemental.component';

describe('ElementalComponent', () => {
  let component: ElementalComponent;
  let fixture: ComponentFixture<ElementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
