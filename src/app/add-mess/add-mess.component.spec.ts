import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessComponent } from './add-mess.component';

describe('AddMessComponent', () => {
  let component: AddMessComponent;
  let fixture: ComponentFixture<AddMessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
