import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CatsOverviewComponent } from '../cats-overview/cats-overview.component';
import { RequestService } from '../request-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PetOverviewComponent } from '../pet-overview/pet-overview.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hi :)');
  });
  it('should render subtitle in a p tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.subtitle').textContent).toContain('I have split this into few extra things..');
  });
  it('should render title in a p tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.title').textContent).toContain('There are two routes:');
  });
  it('should render card with subtitle for pets', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.card-content a.subtitle.pets').textContent).toContain('- This is all pets and there type.');
  });
  it('should render card with subtitle for cats', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.card-content a.subtitle.cats').textContent)
    .toContain('- This the name of the cats and their owners gender.');
  });
  it('should render card with title for pets', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.card-content a.subtitle.pets a.title').textContent).toContain('/pets');
  });
  it('should render card with title for cats', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.card-content a.subtitle.cats a.title').textContent).toContain('/cats');
  });
});
