import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsOverviewComponent } from './cats-overview.component';
import { RequestService } from '../request-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PetOverviewComponent } from '../pet-overview/pet-overview.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

describe('CatsOverviewComponent', () => {
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
  let component: CatsOverviewComponent;
  let fixtureComp: ComponentFixture<CatsOverviewComponent>;

  beforeEach(() => {
    fixtureComp = TestBed.createComponent(CatsOverviewComponent);
    component = fixtureComp.componentInstance;
    fixtureComp.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('get request', () => {
    it('#should return undefined', (done: DoneFn) => {
      const result = component.getPeople();
      expect(result).toEqual(undefined);
      done();
    });
  });

  describe('get cats', () => {
    it('#should return array of cats', (done: DoneFn) => {
      const fixture = [
        {
          name: 'Bob',
          gender: 'Male',
          age: 23,
          pets: [{ name: 'Garfield', type: 'Cat' }]
        }
      ];
      const mockResult = [Object({ Male: 'Garfield' })];
      const result = component.getCats(fixture);
      expect(result).toEqual(mockResult);
      done();
    });
  });

  describe('Male owners', () => {
    it('#should return array of male owned cats', (done: DoneFn) => {
      const fixture = [Object({ Male: 'Garfield' })];
      const mockResult = ['Garfield'];
      const result = component.getMaleOwners(fixture);
      expect(result).toEqual(mockResult);
      done();
    });
  });

  describe('Female owners', () => {
    it('#should return array of female owned cats', (done: DoneFn) => {
      const fixture = [Object({ Female: 'Garfield' })];
      const mockResult = ['Garfield'];
      const result = component.getFemaleOwners(fixture);
      expect(result).toEqual(mockResult);
      done();
    });
    it('#should empty array for unspecified', (done: DoneFn) => {
      const fixture = [Object({ NA: 'Garfield' })];
      const result = component.getFemaleOwners(fixture);
      expect(result).toEqual([]);
      done();
    });
  });
});
