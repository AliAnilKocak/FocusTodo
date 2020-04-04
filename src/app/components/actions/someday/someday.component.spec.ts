import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SomedayComponent} from './someday.component';

describe('SomedayComponent', () => {
  let component: SomedayComponent;
  let fixture: ComponentFixture<SomedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SomedayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
