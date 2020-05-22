import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsComponent } from './items/items.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    WidgetModule
  ],
  exports: [
    // ViewsHomeComponent
  ]
})
export class ViewsModule { }
