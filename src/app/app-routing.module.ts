import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:"user",component:UserComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"**",component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
