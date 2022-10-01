import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';


import { LoginComponent } from "./login/login.component";

const routes: Routes = [{path:'',component:LoginComponent},
{path:'fileupload',component:FileuploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
         exports: [RouterModule]
})
export class AppRoutingModule { }