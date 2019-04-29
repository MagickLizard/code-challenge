import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  getPeople() {
    let request = this.http.get(
      "http://agl-developer-test.azurewebsites.net/people.json"
    );
    return request;
  }
  getCats(people) {
    const petsFiltered = people.filter(
      items => items && items.pets !== null && items.pets.length > 0
    );
    let arrayOfPets = [];
    petsFiltered.map(i => {
      for (let petObj of i.pets) {
        if (petObj.type === "Cat") {
          arrayOfPets.push({ [i.gender]: petObj.name });
        }
      }
    });
    return arrayOfPets;
  }
  getMaleOwners(allArray) {
    let maleArray = [];
    allArray.map(i => {
      if (i.Male) {
        maleArray.push(i.Male);
      }
    });
    return maleArray.sort();
  }
  getFemaleOwners(allArray) {
    let femaleArray = [];
    allArray.map(i => {
      if (i.Female) {
        femaleArray.push(i.Female);
      }
    });
    return femaleArray.sort();
  }
}
