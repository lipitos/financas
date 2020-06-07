import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestimentListComponent } from './investiment-list/investiment-list.component';
import { TypeListComponent } from './type-list/type-list.component';
import { InvestimentCreateComponent } from './investiment-create/investiment-create.component';
import { TypeCreateComponent } from './type-create/type-create.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "investiment-create", component: InvestimentCreateComponent},
  {path: "investiment-list", component: InvestimentListComponent},
  {path: "type-create", component: TypeCreateComponent},
  {path: "type-list", component: TypeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
