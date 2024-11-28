import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyClaimProgressComponent } from './monthly-claim-progress.component';

describe('MonthlyClaimProgressComponent', () => {
  let component: MonthlyClaimProgressComponent;
  let fixture: ComponentFixture<MonthlyClaimProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyClaimProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyClaimProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
