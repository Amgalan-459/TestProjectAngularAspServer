import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestItemsComponent } from "./test-items/test-items.component";
import { WeatherService } from './dio/services/weather.service';
import { WeatherData } from './interfaces/weather-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestProject';
  lst : WeatherData[] | null = null;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherForecasts().then(res => {
      console.log(res);
      this.lst = res;
    });
  }

  weather: WeatherData = {date: "2023-05-05", temperatureC: 0, temperatureF: 0, summary: ""};
  addWeatherClick() {
    this.weatherService.addWeatherForecast(this.weather);
    console.log("added");
  }
  
}
