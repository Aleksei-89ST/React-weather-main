import { AxiosResponse } from 'axios';
import axios from 'axios';
import { Weather } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>(`/weather?q=${city}`);
  }
}