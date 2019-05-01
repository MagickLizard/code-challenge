import { TestBed } from '@angular/core/testing';
import { RequestService } from './request-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PetOverviewComponent } from './pet-overview/pet-overview.component';
import { HeaderComponent } from './header/header.component';
import { CatsOverviewComponent } from './cats-overview/cats-overview.component';
import { HomeComponent } from './home/home.component';


describe('RequestServiceService', () => {
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
      providers: [RequestService],
    });
  });


  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
