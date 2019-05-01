import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request-service.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PetOverviewComponent } from './pet-overview/pet-overview.component';
import { HeaderComponent } from './header/header.component';
import { CatsOverviewComponent } from './cats-overview/cats-overview.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    PetOverviewComponent,
    HeaderComponent,
    CatsOverviewComponent,
    HomeComponent
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
