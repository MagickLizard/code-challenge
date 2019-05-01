import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetOverviewComponent } from './pet-overview/pet-overview.component';
import { CatsOverviewComponent } from './cats-overview/cats-overview.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetOverviewComponent },
  { path: 'cats', component: CatsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
