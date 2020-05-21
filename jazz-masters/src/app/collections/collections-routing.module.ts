import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BioComponent } from './bio/bio.component';
import { BandsComponent } from './bands/bands.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      { path: '', component: BioComponent },
      { path: 'bands', component: BandsComponent },
      { path: 'partners', component: PartnersComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
