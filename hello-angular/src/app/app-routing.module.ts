import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPetComponent } from './new-pet/new-pet.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './task/task.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

const routes: Routes = [
    { path: '', redirectTo: '/pets', pathMatch: 'full' },
    { path: 'pets', component: HomeComponent },
    { path: 'pets/new', component: NewPetComponent },
    { path: 'pets/:id', component: PetInfoComponent },
    { path: 'pets/:id/edit', component: EditInfoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [NewPetComponent];
