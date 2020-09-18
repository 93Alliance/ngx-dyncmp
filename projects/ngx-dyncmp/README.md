# NgxDyncmp

[![npm](https://img.shields.io/npm/dt/@flywine93/ngx-dyncmp.svg)]()
[![npm](https://img.shields.io/npm/l/@flywine93/ngx-dyncmp.svg)]()

A lightweight dynamic component directive with full life-cycle support for inputs and outputs.

| Angular | ngx-dyncmp| NPM package |
|  :---:  |   :---:   |   :---:     |
| 9.x.x   |   9.x.x   | @flywine93/ngx-dyncmp@^9.0.0 |

## Demo

[dynamic component demo online](https://93alliance.github.io/ngx-dyncmp/)

## Installation

```
npm install @flywine93/ngx-dyncmp --save
```

## Features

- Lightweight
- Data synchronization
- A single input attribute triggers update


## Usage

Import `NgxDyncmpModule` where you need to render dynamic components:

```typescript
import { NgxDyncmpModule } from '@flywine93/ngx-dyncmp';

@NgModule({
  imports: [NgxDyncmpModule],
})
export class MyModule {}
```

### ngxDyncCmp Directive

The following example will dynamically create a Todo component.

```html
<ng-container *ngxDyncCmp="component"></ng-container>
 <!-- or -->
 <!-- <ng-container [ngxDyncCmp]="component"></ng-container> -->
```

```typescript
export class AppComponent {
  component = TotoComponent;
  // ...
}
```

### inputs Property

If the dynamic component has Input properties, you can bind them with the `inputs` property.

`todo component`
```html
<div>
    <mat-checkbox [(ngModel)]="todo.checked" (change)="change($event)">{{todo.text}}</mat-checkbox>
</div>
```
```typescript
export class TotoComponent {
  @Input() todo: {checked: boolean, text: string};
}
```

`app component`
```html
<ng-container
    [ngxDyncCmp]="component"
    [inputs]="todoInputs">
</ng-container>
```

```typescript
export class AppComponent {
  component = TotoComponent;
  todoInputs = {
    todo: {
      checked: false,
      text: 'Do Homework'
    }
  };
}
```
- The todo within this todoInputs is the name of TotoComponent's Input property.
- When a deep copy of the todo value within todoInputs occurs, the todo value within TotoComponent will be changed.

### outputs Property

When dynamic components have output properties inside, you can bind them using the `outputs` property.

`todo component`
```html
<div>
    <mat-checkbox [(ngModel)]="todo.checked" (change)="change($event)">{{todo.text}}</mat-checkbox>
</div>
```
```typescript
export class TotoComponent {
  @Input() todo: {checked: boolean, text: string};
  @Output() selected = new EventEmitter<{checked: boolean, text: string}>();

  change(event: MatCheckboxChange): void {
    this.selected.emit(this.todo);
  }
}
```

`app component`
```html
<ng-container
    [ngxDyncCmp]="component"
    [inputs]="todoInputs"
    [outputs]="todoOutputs">
</ng-container>
```

```typescript
export class AppComponent {
  component = TotoComponent;
  todoInputs = {
    todo: {
      checked: false,
      text: 'Do Homework'
    }
  };

  todosOutputs = {
    selected: (e: any) => {
      console.log(e)
    }
  };
}
```

## License

The MIT License (see the [LICENSE](https://github.com/93Alliance/ngx-DYNCMP/blob/master/LICENSE) file for the full text)