import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() humid: Number = 0;
  @Input() temp: Number = 0;

  constructor() { }

  ngOnInit() {
  }


}
