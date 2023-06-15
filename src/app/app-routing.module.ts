import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeComponent } from './components/list-employe/list-employe.component';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';

const routes: Routes = [
{path:'',redirectTo:'list-employe', pathMatch:"full"},
{path:'list-employe',component:ListEmployeComponent},
{path:'add-employe',component:AddEmployeComponent},
{path:'edit-employe/:id',component:AddEmployeComponent},
{path:'**',redirectTo:'list-employe',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
