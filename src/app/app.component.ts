import { Component } from '@angular/core';
import { RequestService } from './request-service.service';

@Component({
  selector: 'body',
  template: `
  <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Data about cat owners and there cats
      </h1>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <br>
    <div class="card-content">
      <div class="content">
        <h2>Pet owner gender and cat name:</h2>
        <div class="columns">
        <h2>Male</h2>
          <ul *ngFor="let petNames of ownerMale">
            <div class="column">
              {{petNames}}
            </div>
          </ul>
        </div>
        <div class="columns">
        <h2>Female</h2>
          <ul *ngFor="let petNames of ownerFemale">
            <div class="column">
              {{petNames}}
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  `
})
export class AppComponent {
  public people;
  public person;
  public pets;
  public ownerMale;
  public ownerFemale;

  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    this._requestService.getPeople().subscribe(
      data => {
      this.people = data
       const catsFound = this.getCats(data);
       this.ownerMale = this.getMaleOwners(catsFound);
       this.ownerFemale = this.getFemaleOwners(catsFound);
        // return this.pets;
      },
      err => console.error(err),
      () => console.log('done loading pets')
    );
  }
  getCats(person) {
    return this._requestService.getCats(person)
  }
  getMaleOwners(catsArray) {
    return this._requestService.getMaleOwners(catsArray)
  }
  getFemaleOwners(catsArray) {
    return this._requestService.getFemaleOwners(catsArray)
  }

  constructor(private _requestService: RequestService) { }
}