import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  getPeople() {
    const request = this.http.get(
      'http://agl-developer-test.azurewebsites.net/people.json'
    );
    return request;
  }
  getAllPets(people) {
    const arrayOfPets = [];
    const petsFiltered = people.filter(
      items => items && items.pets !== null && items.pets.length > 0
    );
    petsFiltered.map(i => {
      for (const petObj of i.pets) {
        arrayOfPets.push(petObj);
      }
    });
    return arrayOfPets;
  }
  getCats(people) {
    const arrayOfCats = [];
    const petsFiltered = people.filter(
      items => items && items.pets !== null && items.pets.length > 0
    );
    petsFiltered.map(i => {
      for (const petObj of i.pets) {
        if (petObj.type === 'Cat') {
          arrayOfCats.push({ [i.gender]: petObj.name });
        }
      }
    });
    return arrayOfCats;
  }
  getGenderOfOwners(allArray, genderOfOwner) {
    const genderArray = [];
    allArray.map(i => {
      if (Object.keys(i).includes(genderOfOwner)) {
        genderArray.push(i[genderOfOwner]);
      }
    });
    return genderArray.sort();
  }
}
