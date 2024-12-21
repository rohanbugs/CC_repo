import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingWorksheetComponent } from './coding-worksheet.component';

describe('CodingWorksheetComponent', () => {
  let component: CodingWorksheetComponent;
  let fixture: ComponentFixture<CodingWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingWorksheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
