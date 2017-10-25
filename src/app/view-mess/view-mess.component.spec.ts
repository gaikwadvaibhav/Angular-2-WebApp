import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessComponent } from './view-mess.component';

describe('ViewMessComponent', () => {
  let component: ViewMessComponent;
  let fixture: ComponentFixture<ViewMessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
