import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinsightsComponent } from './allinsights.component';

describe('AllinsightsComponent', () => {
  let component: AllinsightsComponent;
  let fixture: ComponentFixture<AllinsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllinsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllinsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
