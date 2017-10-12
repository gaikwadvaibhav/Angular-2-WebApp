import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassFormComponent } from './reset-pass-form.component';

describe('ResetPassFormComponent', () => {
  let component: ResetPassFormComponent;
  let fixture: ComponentFixture<ResetPassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
