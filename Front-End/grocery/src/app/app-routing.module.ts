import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RaiserequestComponent } from './raiserequest/raiserequest.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
const routes: Routes = [

  {path:"",component:HomepageComponent},
  {path:"adminlogin",component:AdminComponent},
  {path:"employeelogin",component:EmployeeComponent},
  {path:"userlogin",component:UserComponent},
  {path:"signup",component:SignupComponent},
  {path:"userpanel",component:UserpanelComponent},
  {path:"raiserequest",component:RaiserequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
