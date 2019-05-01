import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request-service.service';

@Component({
  selector: 'app-cats-overview',
  templateUrl: './cats-overview.component.html',
  styleUrls: ['./cats-overview.component.css']
})
export class CatsOverviewComponent implements OnInit {

  constructor(private requestService: RequestService) {}
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
      err => console.error(err));
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
}
