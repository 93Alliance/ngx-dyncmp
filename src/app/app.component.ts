import { Todo2Component } from './todo2/todo2.component';
import { NestComponent } from './nest/nest.component';
import { Component, ChangeDetectorRef, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TotoComponent } from './toto/toto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  component = TotoComponent;
  component2 = Todo2Component;

  todoInputs = {
    todo: {
      checked: false,
      text: 'Do Homework'
    }
  };

  todoOutputs = {
    selected: (e: any) => {
      this.onSelected(e);
    }
  };

  todosOutputs = {
    selected: (e: any) => {
      this.onTodosSelected(e);
    }
  };

  todos = [
    {
      todo: {
        checked: false,
        text: 'Do Homework'
      }
    },
    {
      todo: {
        checked: true,
        text: 'Play Game'
      }
    },
    {
      todo: {
        checked: false,
        text: 'Read Book'
      },
    }

  ];

  todoInputs2 = {
    checked: false,
    text: 'Do Homework'
  };

  todoChange: any;
  todoChanges: any;

  @ViewChild('area1', { read: ViewContainerRef })
  private mainCmpContainer: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  create(): void {
    const cmpFactory = this.cfr.resolveComponentFactory(NestComponent);
    const mainCmpRef = this.mainCmpContainer.createComponent(cmpFactory);
  }

  update(): void {
    this.todoInputs2.checked = !this.todoInputs2.checked;
    if (this.todoInputs2.checked) {
      this.todoInputs2.text = 'Done Homework';
    } else {
      this.todoInputs2.text = 'Do Homework';
    }
  }

  private onSelected(e: { checked: boolean, text: string }): void {
    this.todoChange = Object.assign({}, e);
  }

  private onTodosSelected(e: { checked: boolean, text: string }): void {
    this.todoChanges = Object.assign({}, e);
  }
}
