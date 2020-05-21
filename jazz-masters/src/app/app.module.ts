import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ElementsModule } from './elements/elements.module';
// import { CollectionsModule } from './collections/collections.module';
import { ViewsModule } from './views/views.module';
import { ModsModule } from './mods/mods.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // ElementsModule,
    // CollectionsModule,
    ViewsModule,
    ModsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
