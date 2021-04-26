import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponentComponent},
  { path: 'dashboard/:id', component: ItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
