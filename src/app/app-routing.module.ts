import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SuperPowerDetailComponent } from './super-power-detail/super-power-detail.component';

const routes: Routes = [
  {path: '**',  redirectTo:'hero-list'},
  {path:'hero:id', component: HeroDetailComponent},
  {path:'hero-list', component: HeroListComponent},
  {path:'super-power-list', component: SuperPowerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
