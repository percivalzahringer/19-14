import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepAddComponent } from './peep-add.component';

describe('PeepAddComponent', () => {
  let component: PeepAddComponent;
  let fixture: ComponentFixture<PeepAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
