import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsOverviewComponent } from './cats-overview.component';

describe('CatsOverviewComponent', () => {
  let component: CatsOverviewComponent;
  let fixture: ComponentFixture<CatsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
