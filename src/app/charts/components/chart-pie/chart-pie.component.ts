import {AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {select} from 'd3-selection';
import 'd3-transition';
import {arc, pie} from 'd3-shape';
import {max} from 'd3-array';
import {interpolate} from 'd3-interpolate';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit, AfterContentInit {
  @Input() fontSize = 10;
  @Input() label?: string;
  @Input() typeValue: string;
  @Input() labelColumn: string;
  @Input() subLabel?: string;
  @Input() subLabelSize?: string;

  @Output() hoverPart = new EventEmitter();

  private _data: any[] = [];

  @Input() set data(data) {
    this._data = data;

    if (!this._data || !this._data.length || this.isEmpty()) {
      this._data = [{name: '', chartValue: 100, color: '#484848'}];
    }

    // console.log('data', this._data);

    this.setData();
  }

  @Input() width = 300;
  @Input() height = 300;

  @ViewChild('chart', {static: true})
  public chartRef: ElementRef;

  svg: any;
  container: any;

  pie: any;
  arc: any;
  radius: any;
  color: any;

  $circleValue: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.createChart();
  }

  createChart() {
    this.svg = select(this.chartRef.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    const transform = `translate(${this.width / 2}, ${this.height / 2})`;

    this.container = this.svg
      .append('g')
      .attr('transform', transform);

    this.radius = Math.min(this.width, this.height) / 2;

    this.pie = pie()
      .value((d: any) => {
        return d.chartValue;
      });

    this.arc = arc()
      .outerRadius(this.radius)
      .innerRadius(this.radius / 1.37);

    this.$circleValue = this.container
      .append('foreignObject')
      .attr('x', -this.width / 2)
      .attr('y', -this.height / 2)
      .attr('width', this.width)
      .attr('height', this.height)
      .append('xhtml:div')
      .attr('class', 'gp-chart-pie__circle-value');

    if (this._data && this._data.length) {
      this.setData();
    }
  }

  getMaxValue() {
    const values = [];

    this._data.forEach(data => values.push(data.chartValue));

    return max<number>(values);
  }

  setData() {
    if (!this.svg) {
      return;
    }

    const _this = this;

    function arcTween(a) {
      const i = interpolate(this._current, a);
      this._current = i(0);
      // tslint:disable-next-line:only-arrow-functions
      return function(t) {
        return _this.arc(i(t));
      };
    }

    const arcsG = this.container
      .selectAll('path')
      .data(this.pie(this._data));

    arcsG.enter()
      .append('path')
      .merge(arcsG)
      .attr('class', 'arc')
      .transition()
      .duration(1300)
      .attr('fill', (d, i) => {
        return d.data.color;
      })
      .attrTween('d', arcTween);

    arcsG.on('mouseenter', (data) => {
      if (data) {
        this.hoverPart.emit(data.data);
      }

      if (this.label || this.labelColumn) {
        return;
      }

      this.$circleValue.text(this.getFormattedValue(data.chartValue));
    });

    arcsG.on('mouseleave', (data) => {
      this.hoverPart.emit(null);
    });

    arcsG.exit().remove();

    if (this.$circleValue) {
      if (this.label) {
        this.$circleValue.html(this.label);
      } else {
        let value = 0;

        if (this.labelColumn) {
          const found = this._data.find(item => item.name === this.labelColumn);
          value = found ? found.chartValue : this.getMaxValue();
        } else {
          value = this.getMaxValue();
        }

        /*const value = this.labelColumn ?
            this._data.find(item => item.name === this.labelColumn).chartValue || this.getMaxValue() :
            this.getMaxValue();*/

        const valueTemplate = `<div>${this.getFormattedValue(value)}</div>`;
        const subLabelTemplate = this.subLabel ?
          `<div style="font-size: ${this.subLabelSize || '14px'};">${this.subLabel}</div>` :
          '';
        this.$circleValue.html(`${valueTemplate}${subLabelTemplate}`);
      }

      this.$circleValue.style('font-size', `${this.fontSize}px`);
    }
  }

  getFormattedValue(value: number) {
    if (this.typeValue === 'percent') {
      const total = this._data.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.chartValue;
      }, 0);

      const percent = 100 / (total / value);

      const rounded: number = Math.round(percent * 100) / 100;
      if (rounded === 0 && percent !== 0) {
        return '<0.01%';
      } else if (rounded === 100 && percent !== 100) {
        return '>99.99%';
      }

      return `${rounded}%`;
    }

    return value;
    // return numbro(value).format({average: true});
  }

  isEmpty() {
    let isEmpty = true;
    this._data.forEach(item => {
      if (item.chartValue) {
        isEmpty = false;
      }
    });
    return isEmpty;
  }
}
