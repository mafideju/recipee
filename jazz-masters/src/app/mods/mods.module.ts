import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { WidgetModule } from '../widget/widget.module';
import { ModalComponent } from './modal/modal.component';
import { AccordComponent } from './accord/accord.component';


@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    WidgetModule
  ],
  exports: []
})
export class ModsModule { }
