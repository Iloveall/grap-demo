import {Component, Input, OnInit} from '@angular/core';

const ITEMS = [
  {
    name: 'Wi-Fi',
    icon: 'gbi-critical',
    color: '#ff3728'
  },
  {
    name: 'Ethernet',
    icon: 'gbi-critical',
    color: '#54ff00'
  },
  {
    name: 'DHCP',
    icon: 'gbi-critical',
    color: '#54ff00'
  },
  {
    name: 'Gateway',
    icon: 'gbi-critical',
    color: '#54ff00'
  },
  {
    name: 'DNS',
    icon: 'gbi-critical',
    color: '#54ff00'
  },
  {
    name: 'Captive Portal',
    icon: 'gbi-critical',
    color: '#54ff00'
  },
  {
    name: 'Network Gateway',
    icon: 'gbi-critical',
    color: '#54ff00'
  }
];

@Component({
  selector: 'app-stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.scss']
})
export class StatsListComponent implements OnInit {
  @Input() items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
