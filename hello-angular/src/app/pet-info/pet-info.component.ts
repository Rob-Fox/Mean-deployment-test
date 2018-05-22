import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css'],
})
export class PetInfoComponent implements OnInit {
  tag_line = 'Details about ';
  edit_pet: any;
  pets =  [];
  id: any;
  like_button: Boolean = true;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.edit_pet = { _id: '', Name: '', type: '', details: '', skill_1: '', skill_2: '', skill_3: '', likes: '' };
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('ID gotten from parammap', this.id);
    this.get_pet(this.id);
  }
  get_pet(ID) {
    let pet =  this._httpService.findPets(ID);
    pet.subscribe(data => {
      console.log('Found pet data', data);
      this.edit_pet = data['data'];
    });
  }
  remove_pet(ID) {
    let pet = this._httpService.deletePets(ID);
    pet.subscribe(data => {
      console.log('Component deleting pet');
    });
    this._router.navigateByUrl('/pets');
  }
  cancel_click() {
    this._router.navigateByUrl('/pets');
  }
  like_click(ID) {
    this.like_button = false;
    this.edit_pet.likes += 1;
    console.log(this.like_button);
    let pet = this._httpService.edit_pet(ID, this.edit_pet);
    pet.subscribe(data => {
      console.log('got an editable pet');
      // this._router.navigate(['/pets']);
    });
  }
}
