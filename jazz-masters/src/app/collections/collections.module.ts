import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { WidgetModule } from '../widget/widget.module';
import { BioComponent } from './bio/bio.component';
import { BandsComponent } from './bands/bands.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, BioComponent, BandsComponent, PartnersComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    WidgetModule
  ],
  exports: []
})
export class CollectionsModule { }
