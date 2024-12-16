import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAnnotComponent } from './entity-annot.component';

describe('EntityAnnotComponent', () => {
  let component: EntityAnnotComponent;
  let fixture: ComponentFixture<EntityAnnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityAnnotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityAnnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
