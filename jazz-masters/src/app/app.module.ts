import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { ViewsModule } from './views/views.module';
import { ModsModule } from './mods/mods.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionsModule,
    ViewsModule,
    ModsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
