  import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet Shelter';
  // tag_line_home = 'These pets are looking for a home!';
  // pets = [];
  // pet = {};
  // // new_pet: any;
  // edit_pet: any;
  // // error_check: Boolean = false;
  // // error_arr = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
    ngOnInit() {
      // // this.new_pet = { name: '', type: '', description: '' };
      // this.edit_pet = {Name: ''};
      // let pets_get = this._httpService.getPets();
      // pets_get.subscribe(data => {
      //   console.log('displaying pets', data);
      //   this.pets = data['data'];
      //   });
      }
    // on_submit() {
    //   console.log('form submitted');
    //   let add_pet = this._httpService.add_pet(this.new_pet);
    //   // console.log(add_task);
    //   add_pet.subscribe(data => {
    //     console.log('Adding a pet', data['error']);
    //     if ( data['error'] !==  '') {
    //       this.error_check = true;
    //       this.error_arr.push({'bullshit': data['error']['errors']['name']['message']});
    //       console.log(this.error_arr);
    //     }
    //   });
    //   this.new_pet = { name: '', type: '', description: '', skill_1: '', skill_2: '', skill_3: ''};
    //   this.error_arr = [];
    // }
    // getPets() {
    //   let observable_pets = this._httpService.getPets();
    //   observable_pets.subscribe(data => {
    //     console.log('Got all pets', data);
    //     this.pets = data['data'];
    //     console.log('Hey', this.pets);
    //   });
    //   // this._httpService.getTasks();
    // }
    // showPet(ID) {
    //   let observable_pet = this._httpService.findPets(ID);
    //   observable_pet.subscribe(data => {
    //     console.log('Got specified pet', data);
    //     this.pet = data['data'];
    //     console.log('dude', this.pet);
    //   });
    // }

    // on_edit(ID) {
    //   console.log('Pet edited');
    //   let editable_pet = this._httpService.edit_pet(ID, this.edit_pet);
    //   // let editable_task = this._httpService.findTasks(ID);
    //   editable_pet.subscribe(data => {
    //     console.log('got an editable pet');

    //   });
    // }
    // delete_pet(ID){
    //   let deletable_pets = this._httpService.deletePets(ID);
    // }
    // go_new() {
    //   this._router.navigate(['/new']);
    // }
}
