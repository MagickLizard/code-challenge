import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { People } from './People';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RequestService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getPeople() {
      console.log('hello')
        let request = this.http.get('http://agl-developer-test.azurewebsites.net/people.json');
        console.log('request>>', request)
        return request;
    }
    getCats(people) {
      const petsFiltered = people.filter(items => items && items.pets !== null && items.pets.length > 0)
      let catArray = [];
      (petsFiltered).reduce((previous, current) => {
        for (let petObj of current.pets) {
          if (petObj.type === 'Cat') {
            catArray.push({ 
              catDetails: petObj.name,
              ownerInfo: current.gender
            })
          }
        }
        return previous
      }, {});
      let sortedResult = catArray.sort((a, b) => {
        var nameA = a.catDetails.toUpperCase(); 
        var nameB = b.catDetails.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      console.log('sortedResult', sortedResult)
      return sortedResult;
    }
}