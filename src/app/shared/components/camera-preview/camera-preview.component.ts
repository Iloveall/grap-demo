import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss']
})
export class CameraPreviewComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() value: number;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    window.open(this.link, '_blank');
  }

}
