import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepEditComponent } from './peep-edit.component';

describe('PeepEditComponent', () => {
  let component: PeepEditComponent;
  let fixture: ComponentFixture<PeepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
