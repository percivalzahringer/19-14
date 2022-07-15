import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepolComponent } from './peepol.component';

describe('PeepolComponent', () => {
  let component: PeepolComponent;
  let fixture: ComponentFixture<PeepolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
