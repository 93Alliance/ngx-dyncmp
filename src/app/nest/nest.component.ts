import { Component, OnInit } from '@angular/core';
import { TotoComponent } from '../toto/toto.component';

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.scss']
})
export class NestComponent implements OnInit {
  component = TotoComponent;

  todoInputs = {
    todo: {
      checked: false,
      text: 'Do Homework'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
