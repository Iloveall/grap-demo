import {Component, Input, OnInit} from '@angular/core';

const ITEMS = [
  {
    name: 'Wi-Fi',
    icon: 'wifi'
  },
  {
    name: 'Ethernet',
    icon: 'wifi'
  },
  {
    name: 'DHCP',
    icon: 'wifi'
  },
  {
    name: 'Gateway',
    icon: 'wifi'
  },
  {
    name: 'DNS',
    icon: 'wifi'
  },
  {
    name: 'Captive Portal',
    icon: 'wifi'
  },
  {
    name: 'Network Gateway',
    icon: 'wifi'
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
