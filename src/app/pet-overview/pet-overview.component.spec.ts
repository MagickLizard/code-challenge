import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOverviewComponent } from './pet-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { CatsOverviewComponent } from '../cats-overview/cats-overview.component';
import { RequestService } from '../request-service.service';
import { HomeComponent } from '../home/home.component';




describe('PetOverviewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AppRoutingModule, HttpClientModule],
      declarations: [
        AppComponent,
        PetOverviewComponent,
        HeaderComponent,
        CatsOverviewComponent,
        HomeComponent
      ],
      providers: [RequestService]
    })
    .compileComponents();
  });
  let component: PetOverviewComponent;
  let fixture: ComponentFixture<PetOverviewComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(PetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
