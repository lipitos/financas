import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentListComponent } from './investiment-list.component';

describe('InvestimentListComponent', () => {
  let component: InvestimentListComponent;
  let fixture: ComponentFixture<InvestimentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
