import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SildingimgesComponent } from './sildingimges.component';

describe('SildingimgesComponent', () => {
  let component: SildingimgesComponent;
  let fixture: ComponentFixture<SildingimgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SildingimgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SildingimgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
