import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  tag_line = 'Edit Info';
  edit_pet: any;
  pets = [];
  id: any;
  error_check: Boolean = false;
  error_arr = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.edit_pet = { _id: '', Name: '', type: '', details: '', skill_1: '', skill_2: '', skill_3: '' };
    this.id = this._route.snapshot.paramMap.get('id');
    console.log('ID gotten from parammap', this.id);
    this.get_pet(this.id);
  }
  get_pet(ID) {
    let pet = this._httpService.findPets(ID);
    pet.subscribe(data => {
      console.log('Found pet data', data);
      this.edit_pet = data['data'];
    });
  }
  cancel_click() {
    this._router.navigateByUrl('/pets');
  }
  edit_submit(ID) {
    console.log('Pet edited');
    let editable_pet = this._httpService.edit_pet(ID, this.edit_pet);
    editable_pet.subscribe(data => {
      console.log('got an editable pet');
      if (data['error'] !== undefined){
        console.log('Adding a pet', data['error']);
        if (data['error']['errors'] !== undefined) {
          console.log('there were errors');
          if (data['error']['errors']['Name'] !== undefined) {
            console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
            // console.log('Error_arr', this.error_arr);
          }
          if (data['error']['errors']['type'] !== undefined) {
            console.log('data["error"]["errors"]["type"]', data['error']['errors']['type']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['type']['message'] });
            // console.log('Error_arr', this.error_arr);
          }
          if (data['error']['errors']['description'] !== undefined) {
            console.log('data["error"]["errors"]["description"]', data['error']['errors']['description']);
            this.error_check = true;
            this.error_arr.push({ 'bullshit': data['error']['errors']['description']['message'] });
            console.log('Error_arr', this.error_arr);
          }
      }
      }
      else {
        console.log('no errors');
        this._router.navigate(['/pets']);
      }
    });
      if (this.error_arr === [] ) {
        console.log('empty errors');
      }
      this.error_arr = [];
    }
}
