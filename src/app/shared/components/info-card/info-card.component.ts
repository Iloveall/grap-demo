import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() link = 'https://google.com';

  constructor() {
  }

  ngOnInit(): void {
  }

  open() {
    window.open(this.link, '_blank');
  }

}
