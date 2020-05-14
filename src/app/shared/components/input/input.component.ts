import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ElementBase} from './element-base';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ElementBase implements OnInit {
  @Input() placeholder = 'Enter text';
  @Input() submitted: boolean;
  @Input() value: any;
  @Input() type = 'text';
  @Input() hint: string;
  @Input() vMask: string;
  @Input() vMaskPrefix = '';
  @Input() inputMode: 'text';
  @Input() removeZeroOnFocus: boolean;

  cachedValue: string | number;

  constructor() {
    super();
  }

  public onChange(event) {
    this.valueChange.emit(this.value);
    this.propagateChange(this.value);
  }

  public onFocus(event) {
    if (this.removeZeroOnFocus && +this.value === 0) {
      this.cachedValue = this.value;
      this.value = null;
    }

    this.isFocused = true;
    this.triggerFocus.emit(event);
  }

  public onBlur(event) {
    if (this.removeZeroOnFocus && !this.value) {
      this.value = 0;
    }

    this.isFocused = false;
    this.triggerBlur.emit(event);
  }

  ngOnInit(): void {
  }
}
