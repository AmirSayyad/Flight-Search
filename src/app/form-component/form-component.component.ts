import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  @Output() inputChange = new EventEmitter();
  @Input() autocomplete;
  @Input() placeholder;

  autocompleteList = this.autocomplete;

  showAutocomplete = false;
  input = '';

  constructor() { }

  @Input() set value(val) {
    this.input = val.airport;
  }

  valueChanged() {
    if (this.input) {
      this.filterList();
    } else {
      this.autocompleteList = [];
    }

  }

  filterList() {
    this.autocompleteList = this.autocomplete;
    this.autocompleteList = this.autocompleteList.filter((item) => {
      return item.airport.toLowerCase().indexOf(this.input.toLowerCase()) !== -1;
    });
  }

  select(item?) {
    if (item) {
      this.value = item;
      this.inputChange.emit(item);
    }
    this.showAutocomplete = false;
  }

  onBlur() {
    const t = this;
    setTimeout(function () {
      t.showAutocomplete = false;
      if (t.autocompleteList.length === 1) {
        t.select(t.autocompleteList[0]);
      }
    }, 100);
  }

  onFocus() {
    this.showAutocomplete = true;
  }

  ngOnInit() {
  }
}
