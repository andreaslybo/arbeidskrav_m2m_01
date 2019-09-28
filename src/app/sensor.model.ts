export class Sensor {
    temperature: Number = 0;
    humidity: Number = 0;

    constructor(temp: any, humid: any) {
        this.temperature = temp;
        this.humidity = humid;
    }
}