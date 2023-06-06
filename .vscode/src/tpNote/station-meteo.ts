import { IObserver } from "./IObserver";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private observers: IObserver[];

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this._humidité = humidité;
    this.observers = [];
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this.notifier();
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    this.notifier();
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidité + "%";
  }
  private notifier(): void {
    const temperature = this._temperature;
    const humidité = this._humidité;
    for (const observer of this.observers) {
      observer.changement(temperature, humidité);
    }
  }
  public ajouterSubscriber(observer: IObserver): void {
    this.observers.push(observer);
  }

  public supprimerObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
}
