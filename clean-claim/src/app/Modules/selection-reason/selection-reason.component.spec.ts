import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionReasonComponent } from './selection-reason.component';

describe('SelectionReasonComponent', () => {
  let component: SelectionReasonComponent;
  let fixture: ComponentFixture<SelectionReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionReasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
