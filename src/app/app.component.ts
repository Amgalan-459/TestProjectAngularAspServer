import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WeatherService } from './dio/services/weather.service';
import { WeatherData } from './interfaces/weather-data';
import { TestItemsComponent } from "./test-items/test-items.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
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
  async addWeatherClick() {
    const res = await this.weatherService.addWeatherForecast(this.weather);
    console.log(res);
    console.log("added");
  }
  
}
