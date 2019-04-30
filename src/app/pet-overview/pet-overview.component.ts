import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request-service.service';

@Component({
  selector: 'app-pet-overview',
  templateUrl: './pet-overview.component.html',
  styleUrls: ['./pet-overview.component.scss']
})
export class PetOverviewComponent implements OnInit {

  constructor(private requestService: RequestService) {
  }

   public pets;

  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this.requestService.getPeople().subscribe(
      data => {
        this.pets = this.getAllPets(data);
      },
      err => console.error(err),
      () => console.log('done loading...')
    );
  }
  getAllPets(catsArray) {
    return this.requestService.getAllPets(catsArray);
  }
}
