import { Component, Input } from '@angular/core';
import { FlightSearchService } from './flight-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-search-engine';
  showSearchPage = false;
  constructor(private searchSVC: FlightSearchService) { }

  onSearch(e) {
    this.showSearchPage = true;
    this.searchSVC.getFlights();
  }

}
