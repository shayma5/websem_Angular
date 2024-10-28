import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DefaultComponent } from './dashboards/default/default.component';
import { AdvancedtableComponent } from './dashboards/advancedtable/advancedtable.component';
import { ListeActivitesComponent } from './activites-agricoles/liste-activites/liste-activites.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { LieuxCultesComponent } from './lieux-cultes/lieux-cultes.component';
import { LieuxTouristiqueComponent } from './lieux-touristique/lieux-touristique.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'users', component: AdvancedtableComponent },
  { path: 'activites-agricoles',
    children: [
      {
        path: 'liste',
        component: ListeActivitesComponent
      }
    ]
  },
  {
    path: 'formateurs',
    children: [
      {
        path: 'liste',
        component: FormateursComponent
      }
    ]
  },
  {
    path: 'lieux-cultes',
    children: [
      {
        path: 'liste',
        component: LieuxCultesComponent
      }
    ]
  },
  {
    path: 'lieux-touristiques',
    children: [
      {
        path: 'liste',
        component: LieuxTouristiqueComponent
      }
    ]
  },
  {
    path: 'souvenirs',
    children: [
      {
        path: 'liste',
        component: SouvenirsComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
