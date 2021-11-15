import { MetricDistance, MetricLength, MetricPressure, MetricTemp } from './model';

export const DEFAULT_METRICS = {
  temp: MetricTemp.F,
  length: MetricLength.IN,
  distance: MetricDistance.MI,
  time: 12,
  pressure: MetricPressure.MBAR
};

export const FORECAST_CONFIG = {
  API_ENDPOINT: 'https://api.openweathermap.org/data/2.5/forecast?q',
  API_KEY: '034da672af3e87a27b2bfb04a03baaa1'
};

export const CONFIG = {
  METRICS: 'metrics',
  HOME_LOCATION: 'homeLocation'
};

export const REFRESH_THRESHOLD: number = 3 * 60 * 60 * 1000; //3 hours
