import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {select, mouse, event} from 'd3-selection';
import {scaleLinear, scaleTime} from 'd3-scale';
import {axisLeft, axisBottom} from 'd3-axis';
import {min, max, bisector} from 'd3-array';
import {line} from 'd3-shape';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', {static: true}) public chartRef: ElementRef;

  chartData = [{
    name: 'Some name',
    color: '#00fff6',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      },
      {
        timeStamp: 'Wed May 13 2020 15:01:00 GMT+0300 (GMT+03:00)',
        value: 6000
      },
      {
        timeStamp: 'Wed May 13 2020 16:00:00 GMT+0300 (GMT+03:00)',
        value: 3000
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }, {
    name: 'Some name',
    color: '#ff0000',
    values: [
      {
        timeStamp: 'Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 12:00:00 GMT+0300 (GMT+03:00)',
        value: 1400
      },
      {
        timeStamp: 'Wed May 13 2020 14:01:00 GMT+0300 (GMT+03:00)',
        value: 1500
      },
      {
        timeStamp: 'Wed May 13 2020 17:00:00 GMT+0300 (GMT+03:00)',
        value: 1200
      },
      {
        timeStamp: 'Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)',
        value: 1000
      }
    ]
  }];

  @Input() set data(data) {
    if (!data) {
      return;
    }

    this.chartData = data;
  }

  minYScaleValue = 1000;
  maxYScaleValue = 7000;

  width: number;
  height: number;

  xScale: any;
  yScale: any;

  xAxis: any;
  yAxis: any;

  $xAxis: any;
  $yAxis: any;

  svg: any;
  container: any;
  options = {width: 0, height: 200};
  margin = {top: 10, right: 10, bottom: 30, left: 40};

  path: any;
  linesG: any;
  mouseG: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.options.width = this.el.nativeElement.clientWidth;
      this.createChart();
    }, 250);
  }

  createChart(): void {
    this.width = this.options.width - this.margin.left - this.margin.right;
    this.height = this.options.height - this.margin.top - this.margin.bottom;

    this.svg = select(this.chartRef.nativeElement)
      .append('svg')
      .attr('width', this.options.width)
      .attr('height', this.options.height);

    this.container = this.svg
      .append('g')
      .attr('class', 'container')
      .attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

    this.createX();
    this.createXAxis();
    this.createY();
    this.createYAxis();
    this.createLinesGroup();
    this.createMousePointer();

    this.drawLinesData();
  }

  createX(): void {
    this.xScale = scaleTime()
      .domain([
        new Date('Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)'),
        new Date('Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)')
      ])
      .range([0, this.width]);
  }

  createXAxis(): void {
    this.xAxis = axisBottom(this.xScale)
      .ticks(5)
      .tickSize(-this.height);

    this.$xAxis = this.container
      .append('g')
      .attr('class', 'gp-axis__x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis);
  }

  createY(): void {
    this.yScale = scaleLinear()
      .domain([this.minYScaleValue, this.maxYScaleValue])
      .range([this.height, 0]);
  }

  createYAxis(): void {
    this.yAxis = axisLeft(this.yScale)
      .tickSize(1000)
      .tickSize(-this.width)
      .tickFormat((value) => `${value}`);

    this.$yAxis = this.container
      .append('g')
      .attr('class', 'gp-axis__y')
      .attr('width', this.width)
      .call(this.yAxis);
  }

  createLinesGroup(): void {
    this.linesG = this.container.append('g');
  }

  drawLinesData() {
    this.path = this.linesG
      .selectAll('.path-data')
      .data(this.chartData);

    this.path
      .enter()
      .append('path')
      .attr('class', 'path-data')
      .merge(this.path)
      .attr('d', (group: any) => {
        return line()
          .x((d: any) => {
            return this.xScale(new Date(d.timeStamp));
          })
          .y((d: any) => {
            return this.yScale(d.value);
          })(group.values);
      })
      .attr('fill', 'none')
      .attr('stroke', (group: any) => {
        return group.color;
      })
      .attr('stroke-width', 3)
      .style('clip-path', 'url(#clip)');

    this.path
      .exit()
      .remove();
  }

  createMousePointer(): void {
    this.mouseG = this.container
      .append('g')
      .attr('class', 'mouse-over-effects');

    this.mouseG.append('path')
      .attr('class', 'mouse-line')
      .attr('stroke', '#A0A0A0')
      .attr('stroke-width', '1px');

    this.mouseG.append('rect')
      .attr('class', 'mouse-rect')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all');

    this.mouseG
      .on('mouseover', () =>
        this.mouseG.select('.mouse-line').style('display', null)
      )
      .on('mouseout', () =>
        this.mouseG.select('.mouse-line').style('display', 'none')
      )
      .on('mousemove', (_, j, nodes) => {
        const position =  mouse(nodes[0])[0];

        this.svg
          .selectAll('.mouse-line')
          .attr('d', () => {
            let d = 'M' + position + ',' + this.height;
            d += ' ' + position + ',' + 0;
            return d;
          });
      });
  }

}
