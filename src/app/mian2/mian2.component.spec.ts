import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2Component } from './mian2.component';

describe('Mian2Component', () => {
  let component: Main2Component;
  let fixture: ComponentFixture<Main2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
