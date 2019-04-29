import { Component } from "@angular/core";
import { RequestService } from "./request-service.service";

@Component({
  selector: "body",
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
        <div class="columns">
          <div class="column is-one-sixth">
            <h2 class="title">Female pet owners</h2>
            <div *ngFor="let petNames of ownerFemale">
              <div>
                Pet Name:
                {{ petNames }}
              </div>
            </div>
          </div>
          <br />
          <div class="column is-one-sixth">
            <h2 class="title">Male pet owners</h2>
            <div *ngFor="let petNames of ownerMale">
              <div>
                Pet Name:
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
    this._requestService.getPeople().subscribe(
      data => {
        const catsFound = this.getCats(data);
        this.ownerMale = this.getMaleOwners(catsFound);
        this.ownerFemale = this.getFemaleOwners(catsFound);
      },
      err => console.error(err),
      () => console.log("done loading...")
    );
  }
  getCats(data) {
    return this._requestService.getCats(data);
  }
  getMaleOwners(catsArray) {
    return this._requestService.getGenderOfOwners(catsArray, "Male");
  }
  getFemaleOwners(catsArray) {
    return this._requestService.getGenderOfOwners(catsArray, "Female");
  }

  constructor(private _requestService: RequestService) {}
}
