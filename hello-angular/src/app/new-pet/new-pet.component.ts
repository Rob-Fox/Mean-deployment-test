import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl:  './new-pet.component.html',
  styleUrls: ['./new-pet.component.css'],
})
export class NewPetComponent implements OnInit {
  // title = 'Pet Shelter';
  tag_line = 'Know of a pet needing a home?';
  new_pet: any;
  error_check:  Boolean = false;
  error_arr = [];


  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.new_pet = { Name: '', type: '', description: '' };
  }
  on_submit() {
    console.log('form submitted');
    let add_pet = this._httpService.add_pet(this.new_pet);
    // console.log(add_task);
    add_pet.subscribe(data => {
      console.log('Adding a pet', data['error']);
      if ( data['error'] !== undefined) {
        if (data['error']['errors']['Name'] !== undefined) {
          console.log('data["error"]["errors"]["Name"]', data['error']['errors']['Name']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['Name']['message'] });
          // console.log('Error_arr', this.error_arr);
        }
        else if (data['error']['errors']['type'] !== undefined) {
          console.log('data["error"]["errors"]["type"]', data['error']['errors']['type']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['type']['message'] });
          // console.log('Error_arr', this.error_arr);
        }
        else if (data['error']['errors']['description'] !== undefined) {
          console.log('data["error"]["errors"]["description"]', data['error']['errors']['description']);
          this.error_check = true;
          this.error_arr.push({ 'bullshit': data['error']['errors']['description']['message'] });
          console.log('Error_arr', this.error_arr);
        }
      }
      else {
        this._router.navigate(['/pets']);
      }
    });
    this.new_pet = { Name: '', type: '', description: '', skill_1: '', skill_2: '', skill_3: '' };
    this.error_arr = [];
    // this._router.navigate(['/pets']);
  }
  cancel_click() {
    this._router.navigateByUrl('/pets');
  }

}
