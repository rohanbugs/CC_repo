import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRemarkComponent } from './audit-remark.component';

describe('AuditRemarkComponent', () => {
  let component: AuditRemarkComponent;
  let fixture: ComponentFixture<AuditRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditRemarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
