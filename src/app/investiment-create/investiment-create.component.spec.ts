import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentCreateComponent } from './investiment-create.component';

describe('InvestimentCreateComponent', () => {
  let component: InvestimentCreateComponent;
  let fixture: ComponentFixture<InvestimentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
