import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBodyComponent } from './search-body/search-body.component';
import { FlightSearchService } from './flight-search.service';
import { FormComponentComponent } from './form-component/form-component.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearchBodyComponent,
    FormComponentComponent,
    SearchItemComponent,
    FilterComponent,
    HomeComponent
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearchBodyComponent,
    FormComponentComponent,
    SearchItemComponent,
    FilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FlightSearchService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
