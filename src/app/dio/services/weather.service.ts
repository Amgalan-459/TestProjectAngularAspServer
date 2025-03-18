import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  async getWeatherForecasts() : Promise<WeatherData[]> {
    return await firstValueFrom( this.http.get<WeatherData[]>('http://localhost:5071/weather/all'));
  }

  addWeatherForecast( weather: WeatherData ) {
    this.http.post('https://localhost:5071/weather', weather);
  }
}
