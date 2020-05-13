import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {select, mouse, event} from 'd3-selection';
import {scaleLinear, scaleTime} from 'd3-scale';
import {axisLeft, axisBottom} from 'd3-axis';
import {min, max, bisector} from 'd3-array';
import {line} from 'd3-shape';
import {zoom, zoomIdentity} from 'd3-zoom';

import * as d3 from 'd3';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', {static: true}) public chartRef: ElementRef;

  @Input() set data(data) {
    if (!data) {
      return;
    }

    // this.draw();
  }

  maxYScaleValue = 70000;

  width: 300;
  height: 300;

  xScale: any;
  yScale: any;

  xAxis: any;
  yAxis: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.draw();
  }

/*
  draw(): void {
// set the dimensions and margins of the graph
    const margin = {top: 10, right: 100, bottom: 30, left: 30};
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
    const svg = d3.select(this.chartRef.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

// Read the data
    // @ts-ignore
    d3.csv('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv', (data: any) => {

      data = [data];

      console.log('data', data);

      // List of groups (here I have one group per column)
      const allGroup = ['valueA', 'valueB', 'valueC'];

      // Reformat the data: we need an array of arrays of {x, y} tuples
      const dataReady = allGroup.map((grpName) => { // .map allows to do something for each element of the list
        return {
          name: grpName,
          values: data.map((d) => {
            return {time: d.time, value: +d[grpName]};
          })
        };
      });
      // I strongly advise to have a look to dataReady with
      // console.log(dataReady)

      // A color scale: one color for each group
      const myColor = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2);

      // Add X axis --> it is a date format
      const x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
      svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 20])
        .range([height, 0]);
      svg.append('g')
        .call(d3.axisLeft(y));

      // Add the lines
      // tslint:disable-next-line:no-shadowed-variable
      const line = d3.line()
        .x((d: any) => {
          return x(+d.time);
        })
        .y((d: any) => {
          return y(+d.value);
        });
      // @ts-ignore
      svg.selectAll('myLines')
        .data(dataReady)
        .enter()
        .append('path')
        .attr('class', (d) => {
          return d.name;
        })
        .attr('d', (d: any) => {
          return line(d.values);
        })
        // @ts-ignore
        .attr('stroke', (d: any) => {
          return myColor(d.name);
        })
        .style('stroke-width', 4)
        .style('fill', 'none');

      // Add the points
      // @ts-ignore
      svg
        // First we need to enter in a group
        .selectAll('myDots')
        .data(dataReady)
        .enter()
        .append('g')
        // @ts-ignore
        .style('fill', (d: any) => {
          return myColor(d.name);
        })
        .attr('class', (d: any) => {
          return d.name;
        })
        // Second we need to enter in the 'values' part of this group
        .selectAll('myPoints')
        .data((d) => {
          return d.values;
        })
        .enter()
        .append('circle')
        .attr('cx', (d) => {
          return x(d.time);
        })
        .attr('cy', (d) => {
          return y(d.value);
        })
        .attr('r', 5)
        .attr('stroke', 'white');

      // Add a label at the end of each line
      svg
        .selectAll('myLabels')
        .data(dataReady)
        .enter()
        .append('g')
        .append('text')
        .attr('class', (d) => {
          return d.name;
        })
        .datum((d) => {
          return {name: d.name, value: d.values[d.values.length - 1]};
        }) // keep only the last value of each time series
        .attr('transform', (d) => {
          return 'translate(' + x(d.value.time) + ',' + y(d.value.value) + ')';
        }) // Put the text at the position of the last point
        .attr('x', 12) // shift the text a bit more right
        .text((d) => {
          return d.name;
        })
        // @ts-ignore
        .style('fill', (d: any) => {
          return myColor(d.name);
        })
        .style('font-size', 15);

      // Add a legend (interactive)
      // @ts-ignore
      // @ts-ignore
      svg
        .selectAll('myLegend')
        .data(dataReady)
        .enter()
        .append('g')
        .append('text')
        .attr('x', (d, i) => {
          return 30 + i * 60;
        })
        .attr('y', 30)
        .text((d) => {
          return d.name;
        })
        // @ts-ignore
        .style('fill', (d: any) => {
          return myColor(d.name);
        })
        .style('font-size', 15)
        .on('click', (d) => {
          // is the element currently visible ?
          const currentOpacity = d3.selectAll('.' + d.name).style('opacity');
          // Change the opacity: from 0 to 1 or from 1 to 0
          // @ts-ignore
          d3.selectAll('.' + d.name).transition().style('opacity', currentOpacity === 1 ? 0 : 1);

        });
    });

  }
*/

  /*  createX(): void {
      this.xScale = scaleTime()
        .domain([
          new Date('Wed May 13 2020 09:00:00 GMT+0300 (GMT+03:00)'),
          new Date('Wed May 13 2020 23:00:00 GMT+0300 (GMT+03:00)')
        ])
        .range([0, this.width]);
    }

    createY(): void {
      this.yScale = scaleLinear()
        .domain([0, this.maxYScaleValue])
        .range([this.height, 0]);
    }

    createXAxis(): void {
      this.xAxis = axisBottom(this.xScale)
        .ticks(5)
        .tickFormat((date: any) => {
          return this.d3Service.getTimeFormat(date);
        });

      this.$xAxis = this.container
        .append('g')
        .attr('class', 'gp-axis__x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(this.xAxis);
    }

    createYAxis(): void {
      this.yAxis = axisLeft(this.yScale)
        .tickValues(this.d3Service.generateTickValues(0, this.maxYScaleValue, this.yScaleStep, this.isNegativeAxis))
        .tickSize(-this.width)
        .tickFormat((value) => `${ value }`);

      this.$yAxis = this.container
        .append('g')
        .attr('class', 'gp-axis__y')
        .attr('width', this.width)
        .call(this.yAxis);
    }*/

}
