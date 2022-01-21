import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulmonologistComponent } from './pulmonologist.component';

describe('PulmonologistComponent', () => {
  let component: PulmonologistComponent;
  let fixture: ComponentFixture<PulmonologistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulmonologistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulmonologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
