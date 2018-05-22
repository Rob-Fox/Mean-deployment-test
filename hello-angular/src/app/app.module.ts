import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './task/task.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    PetInfoComponent,
    EditInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
