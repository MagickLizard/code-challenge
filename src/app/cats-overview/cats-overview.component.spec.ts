import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsOverviewComponent } from './cats-overview.component';
import { RequestService } from '../request-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PetOverviewComponent } from '../pet-overview/pet-overview.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';

describe('CatsOverviewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AppRoutingModule, HttpClientModule],
      declarations: [
        AppComponent,
        PetOverviewComponent,
        HeaderComponent,
        CatsOverviewComponent
      ],
      providers: [RequestService]
    }).compileComponents();
  });
  let component: CatsOverviewComponent;
  let fixture: ComponentFixture<CatsOverviewComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(component);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Hi :)'
  //   );
  // });
});
