import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { AddSujetComponent } from './sondage/add-sujet/add-sujet.component';
import { ListeSondageComponent } from './sondage/liste-sondage/liste-sondage.component';

const routes: Routes = [
  {
    path:'', component:HomePageComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterUsersComponent
  },
  {
    path:'add-sujet', component:AddSujetComponent
  },
  {
    path:'liste-sujet', component:ListeSondageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
