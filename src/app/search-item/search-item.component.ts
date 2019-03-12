import { Component, OnInit, Input } from '@angular/core';
import { FlightSearchService } from '../flight-search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() flight;
  searchForm;

  constructor(private searchSVC: FlightSearchService) { }

  ngOnInit() {
    this.searchForm = this.searchSVC.searchForm;
  }

}
