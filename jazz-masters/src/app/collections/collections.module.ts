import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    WidgetModule
  ],
  exports: []
})
export class CollectionsModule { }
