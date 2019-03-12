import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  airports: any;
  searchForm: any;
  min: any;
  max: any;
  fare: any;
  constructor(private searchSVC: FlightSearchService) { }

  ngOnInit() {
    this.airports = this.searchSVC.airports;
    this.searchForm = this.searchSVC.searchForm;
    this.min = this.searchSVC.minFlightFare;
    this.max = this.searchSVC.maxFlightFare;
  }

  valueChanged(e) {
    this.fare = e;
    this.searchSVC.fareFilter(e);
    this.ngOnInit();

  }

  search(single) {
    if (single) {
      this.searchSVC.searchForm.return_date = null;
    }
    if (this.searchSVC.searchForm.source && this.searchSVC.searchForm.destination && this.searchSVC.searchForm.departure_date) {
      this.searchSVC.getFlights();
      this.ngOnInit();
      if (this.fare) {
        this.searchSVC.fareFilter(this.fare);
      }
    }
  }

  captureEvent(e) {
    console.log(e);
  }

}
