import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { TokenInterceptor } from './services/Interseptor';
import { AddSujetComponent } from './sondage/add-sujet/add-sujet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ListeSondageComponent } from './sondage/liste-sondage/liste-sondage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    LoginComponent,
    HomePageComponent,
    AddSujetComponent,
    ListeSondageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
