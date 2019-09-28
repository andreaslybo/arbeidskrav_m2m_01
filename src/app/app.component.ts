import { Component, OnInit } from '@angular/core';
import { SensorComponent } from './sensor/sensor.component';
import { HttpClient } from '@angular/common/http';
import { Sensor } from './sensor.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'iFarm 1.0';
  sensor: Sensor;
  updates: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    this.updates += 1;

    setInterval(() => {
      this.getData();
      this.updates += 1;
      console.log(this.updates);
    }, 30000);
  }

  getData() {
    return this.http.get('https://api.thingspeak.com/channels/873228/feeds.json?api_key=CUJ82PBUCPDSSYDV&results=1')
      .subscribe((res: any) => {
          let newSensor = new Sensor(res.feeds[0].field1, res.feeds[0].field2);
          console.log(newSensor)
          this.sensor = newSensor;
      });
  }
}
