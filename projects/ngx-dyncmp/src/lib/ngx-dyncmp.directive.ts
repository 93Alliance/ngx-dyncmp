import {
  Directive,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit, Input, ComponentRef,
  OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxDyncCmp]',
  exportAs: 'ngxDyncCmp'
})
export class NgxDyncmpDirective implements OnInit, OnDestroy, OnChanges {

  @Input('ngxDyncCmp') dyncCmp: any;     // dynamic component
  @Input() inputs: object;   // {foo: value}, @Input property name is foo
  @Input() outputs: object;  // {fun: ()=>{}}, @Output property name is fun;

  private cmpRef: ComponentRef<any>;
  private initFlag = false;
  private inputsCache = {};

  constructor(
    private vf: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.initFlag = true; // 是否初始化了的标志
    this.setInputsChanges();

    if (this.dyncCmp) {
      const cmpFactory = this.cfr.resolveComponentFactory(this.dyncCmp);
      this.cmpRef = this.vf.createComponent(cmpFactory);
      this.initInputs();
      this.initOutputs();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initFlag) {
      if (changes.hasOwnProperty('inputs')) {
        this.setInputsChanges();
        this.initInputs();
      }
    }
  }

  ngOnDestroy(): void {
    this.cmpRef.destroy();
    this.cmpRef = null;
    this.vf.clear();
  }

  private initInputs(): void {
    if (!this.inputs) {return; }
    for (const item of Object.entries(this.inputs)) {
      const key = item[0];
      const value = item[1];
      this.inputsCache[key] = value;
    }
  }

  private initOutputs(): void {
    if (!this.outputs) {return; }
    for (const item of Object.entries(this.outputs)) {
      const key = item[0];
      const value = item[1];
      this.cmpRef.instance[key].subscribe( (e?: any) => {
        value(e);
      });
    }
  }

  private setInputsChanges(): void {
    if (!this.inputs) { return; }

    for (const item of Object.entries(this.inputs)) {
      const key = item[0];
      const value = item[1];
      this.inputsCache[key] = value;
    }

    for (const item of Object.entries(this.inputsCache)) {
      const key = item[0];
      Object.defineProperty(this.inputsCache, key, {
        get: () => {
          return this.inputs[key];
        },
        set: (newValue) => {
          this.inputs[key] = newValue;
          this.cmpRef.instance[key] = this.inputs[key];
        },
        configurable: true
      });
    }
  }
}
