import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCurve } from './hero-curve';

describe('HeroCurve', () => {
  let component: HeroCurve;
  let fixture: ComponentFixture<HeroCurve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCurve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCurve);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
