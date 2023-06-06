export interface IObserver {
  changement(temperature: number, humidité: number): void;
}
