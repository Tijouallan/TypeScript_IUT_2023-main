export class Journalisation {
  private static _instance: Journalisation;
  private _meteo: Array<string>;
  private _temperature;
  private _humidité;

  private constructor(temperature: number = 0, humidité: number = 0, meteo = []) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._meteo = meteo;
  }

  static get instance(): Journalisation {
    if (!Journalisation._instance) {
      Journalisation._instance = new Journalisation();
    }
    return Journalisation._instance;
  }
  journaliser(temperature: number, humidité: number): void {
    let nbmesure = new Date().toLocaleDateString();
    this._meteo.push(` [${nbmesure}] Température : ${temperature} °C / Humidité : ${humidité} %`);
  }
  afficher(): void {
    for (const iterator of this._meteo) {
      console.log(iterator);
    }
  }
  affiche(temperature: number, humidité: number): void {
    let nbmesure = new Date().toLocaleDateString();
    console.log(` [${nbmesure}] Température : ${temperature} °C / Humidité : ${humidité} %`);
  }
}
