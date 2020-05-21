import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { TimesHeaderDirective } from './times-header.directive';
import { WidgetModule } from '../widget/widget.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, TimesHeaderDirective, SegmentComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    WidgetModule
  ],
  exports: []
})
export class ElementsModule { }
