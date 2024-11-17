import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimOverviewComponent } from './claim-overview.component';

describe('ClaimOverviewComponent', () => {
  let component: ClaimOverviewComponent;
  let fixture: ComponentFixture<ClaimOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
