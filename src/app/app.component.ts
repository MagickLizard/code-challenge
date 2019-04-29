import {Component} from '@angular/core';
import {RequestService} from './request-service.service';
import { Observable, of } from 'rxjs';
 
@Component({
  selector: 'body',
  template:`
  <h2>People</h2>
  <header *ngFor="let personGender of people">{{personGender.gender}}</header>
  <ul>
    <li *ngFor="let person of people">{{person.name}}</li>
    <li *ngFor="let person of people">{{person.pets}}</li>
    <li *ngFor="let person of people"><input type="text" name="person-name" [(ngModel)]="person"> </li>
    <p>Create a new food: <input type="text" name="food_name" [(ngModel)]="food_name"><button (click)="createFood(food_name)">Save</button></p>
  </ul>
  `
})
export class AppComponent {
//  people: People[];
public people;
public person;
 public pets;


  ngOnInit() {
    this.getPeople();
  }
  // getPeople(): void {
  //   this._requestService.getPeople().subscribe(
  //      data => this.people = data
  //    );
  //  }
  getPeople() {
    this._requestService.getPeople().subscribe(
       data => { this.people = data
         console.log('data', data)
         this.getCats(data);
         return data;},
       err => console.error(err),
       () => console.log('done loading people')
     );
   }
   getCats(person) {
    console.log('person.person', person)
    return this._requestService.getCats(person).subscribe(
      data => data
      );
   }
 
  constructor(private _requestService: RequestService) { }
}