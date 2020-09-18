import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.scss']
})
export class TotoComponent implements OnInit {

  @Input() todo: {checked: boolean, text: string};

  @Output() selected = new EventEmitter<{checked: boolean, text: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  change(event: MatCheckboxChange): void {
    this.selected.emit(this.todo);
  }
}
