import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) {
   }

  getPets() {
    return this._http.get('/pets');
  }
  findPets(ID) {
    console.log('made it to service');
    return this._http.get('/pets/' + ID);
  }
  deletePets(ID) {
    let tempObservable = this._http.delete('/pets/' + ID);
    tempObservable.subscribe(data => console.log('Deleted pet with id: ', data));
    return this._http.get('/pets');
  }
  add_pet(new_pet) {
    console.log('made it to service');
    console.log(new_pet);
    return this._http.post('/pets', new_pet);
  }
  add_skills(new_skills) {
    console.log('made it to service');
    console.log(new_skills);
    return this._http.post('/pets', new_skills);
  }
  edit_pet(ID, edit_pet) {
    console.log('Made it to edit_pet in SERVICE', ID, edit_pet);
    return this._http.put('/pets/' + ID, edit_pet);
  }

}
