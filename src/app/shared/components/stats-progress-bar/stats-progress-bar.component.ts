import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats-progress-bar',
  templateUrl: './stats-progress-bar.component.html',
  styleUrls: ['./stats-progress-bar.component.scss']
})
export class StatsProgressBarComponent implements OnInit {
  @Input() amount: number|string;
  @Input() caption: string;
  @Input() value = 0;
  @Input() growingUp: boolean;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
