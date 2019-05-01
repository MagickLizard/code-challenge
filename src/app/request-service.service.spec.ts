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
      providers: [RequestService]
    });
  });

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
  describe('get all pets', () => {
    it('#should return array of data needed', (done: DoneFn) => {
      const fixture = [
        {
          name: 'Bob',
          gender: 'Male',
          age: 23,
          pets: [{ name: 'Garfield', type: 'Cat' }]
        }
      ];
      const service: RequestService = TestBed.get(RequestService);
      const result = service.getAllPets(fixture);
      const mockResult = [Object({ name: 'Garfield', type: 'Cat' })];
      expect(result).toEqual(mockResult);
      done();
    });
  });
  describe('get all cats', () => {
    it('#should return array of data needed', (done: DoneFn) => {
      const fixture = [
        {
          name: 'Bob',
          gender: 'Male',
          age: 23,
          pets: [{ name: 'Garfield', type: 'Cat' }]
        }
      ];
      const service: RequestService = TestBed.get(RequestService);
      const result = service.getCats(fixture);
      const mockResult = [Object({ Male: 'Garfield' })];
      expect(result).toEqual(mockResult);
      done();
    });
  });
  describe('get gender of owner', () => {
    it('#should return array of male owned cats', (done: DoneFn) => {
      const fixture = [Object({ Male: 'Garfield' })];
      const mockResult = ['Garfield'];
      const service: RequestService = TestBed.get(RequestService);
      const result = service.getGenderOfOwners(fixture, 'Male');
      expect(result).toEqual(mockResult);
      done();
    });
    it('#should return array of male owned cats', (done: DoneFn) => {
      const fixture = [Object({ Female: 'Garfield' })];
      const mockResult = ['Garfield'];
      const service: RequestService = TestBed.get(RequestService);
      const result = service.getGenderOfOwners(fixture, 'Female');
      expect(result).toEqual(mockResult);
      done();
    });
    it('#should return array when no matching results', (done: DoneFn) => {
      const fixture = [Object({ Male: 'Garfield' })];
      const mockResult = [];
      const service: RequestService = TestBed.get(RequestService);
      const result = service.getGenderOfOwners(fixture, 'Female');
      expect(result).toEqual(mockResult);
      done();
    });
  });
  describe('get request', () => {
  it('#getObservableValue should return value from observable and contain values', (done: DoneFn) => {
    const service: RequestService = TestBed.get(RequestService);
    service.getPeople().subscribe(value => {
      expect(value).toEqual([
        Object({
          name: 'Bob',
          gender: 'Male',
          age: 23,
          pets: [
            Object({ name: 'Garfield', type: 'Cat' }),
            Object({ name: 'Fido', type: 'Dog' })
          ]
        }),
        Object({
          name: 'Jennifer',
          gender: 'Female',
          age: 18,
          pets: [Object({ name: 'Garfield', type: 'Cat' })]
        }),
        Object({ name: 'Steve', gender: 'Male', age: 45, pets: null }),
        Object({
          name: 'Fred',
          gender: 'Male',
          age: 40,
          pets: [
            Object({ name: 'Tom', type: 'Cat' }),
            Object({ name: 'Max', type: 'Cat' }),
            Object({ name: 'Sam', type: 'Dog' }),
            Object({ name: 'Jim', type: 'Cat' })
          ]
        }),
        Object({
          name: 'Samantha',
          gender: 'Female',
          age: 40,
          pets: [Object({ name: 'Tabby', type: 'Cat' })]
        }),
        Object({
          name: 'Alice',
          gender: 'Female',
          age: 64,
          pets: [
            Object({ name: 'Simba', type: 'Cat' }),
            Object({ name: 'Nemo', type: 'Fish' })
          ]
        })
      ]);
      done();
    });
  });
});
});
