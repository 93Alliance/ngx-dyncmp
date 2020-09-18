import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component implements OnInit {

  @Input() checked: boolean;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
