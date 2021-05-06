import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'add-user',component:AddUserComponent},

  {path:'users',component:UsersComponent},
   {path:'',component:LoginComponent},

  {path:'edit-user/:id',component:AddUserComponent},
  {path:'',component:UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
