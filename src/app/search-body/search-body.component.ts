import { Component, OnInit, Input } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {

  @Input() searchResult;
  constructor(private searchSVC: FlightSearchService) {
  }

  ngOnInit() { }
}
