import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private searchSVC: FlightSearchService) {
      this.animateQuote();
    }

  quoteArray = [
    'Plannig your Next Trip?',
    'Flying to your dream Destination?',
    'Looking for Great Discounts on Flights?'
    ];
    quote: string = this.quoteArray[0];

    private airports = this.searchSVC.airports;

    @Output() searchEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    searchForm = this.searchSVC.searchForm;

    animateQuote() {
    const t = this;
      let step = 0;
      const timerID = setInterval(function() {
        t.quote = t.quoteArray[step];
        step++;
        if (step === 2) {
          step = 0;
        }
      }, 5000);
    }

    ngOnInit() {}

    search() {
      if (this.searchSVC.searchForm.source && this.searchSVC.searchForm.destination && this.searchSVC.searchForm.departure_date) {
        this.searchEvent.emit(true);
        this.searchSVC.getFlights();
      }
    }
}
