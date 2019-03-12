import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  @Input() min;
  @Input() max;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();
  value;

  ngOnInit() {
    this.value = this.max;
  }

  chnageFilter() {
    this.valueChanged.emit(this.value);
  }
}
