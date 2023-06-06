import { IObserver } from "./IObserver";
export class AfficheurTexte implements IObserver {
  affiche(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%");
  }
  public changement(temperature: number, humidité: number): void {
    console.log(temperature + "°C");
    console.log(humidité + "%");
  }
}
