import { Component } from '@angular/core';
import { RequestService } from './request-service.service';

@Component({
  selector: 'body',
  template: `
    <section class='hero is-primary'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>
            Names of cats and the gender of their owners
          </h1>
        </div>
      </div>
    </section>
    <section class='section'>
      <div class='container'>
        <div class='columns'>
          <div class='column is-one-sixth'>
            <h2 class='title'>Female</h2>
            <div *ngFor='let petNames of ownerFemale'>
              <div>
              Cat Name:
                {{ petNames }}
              </div>
            </div>
          </div>
          <br />
          <div class='column is-one-sixth'>
            <h2 class='title'>Male</h2>
            <div *ngFor='let petNames of ownerMale'>
              <div>
              Cat Name:
                {{ petNames }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AppComponent {
  public ownerMale;
  public ownerFemale;

  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    this.requestService.getPeople().subscribe(
      data => {
        const catsFound = this.getCats(data);
        this.ownerMale = this.getMaleOwners(catsFound);
        this.ownerFemale = this.getFemaleOwners(catsFound);
      },
      err => console.error(err),
      () => console.log('done loading...')
    );
  }
  getCats(data) {
    return this.requestService.getCats(data);
  }
  getMaleOwners(catsArray) {
    return this.requestService.getGenderOfOwners(catsArray, 'Male'); // Passing a string as it makes it easier to add any gender.
  }
  getFemaleOwners(catsArray) {
    return this.requestService.getGenderOfOwners(catsArray, 'Female');
  }

  constructor(private requestService: RequestService) {}
}
