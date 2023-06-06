import * as asciichart from "asciichart";
import { IObserver } from "./IObserver";

export class AfficheurGraphique implements IObserver {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  affiche(): void {
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
  public changement(temperature: number, humidité: number): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidité);
    this.affiche();
  }
}
