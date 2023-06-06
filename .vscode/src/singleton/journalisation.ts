import { CompteBanquaire } from "./compte_banquaire";
export class Journalisation {
  private static _instance: Journalisation;
  private _operations: Array<string>;

  private constructor(operations = []) {
    this._operations = operations;
  }

  static get instance(): Journalisation {
    if (!Journalisation._instance) {
      Journalisation._instance = new Journalisation();
    }
    return Journalisation._instance;
  }
  journaliser(operations: string): void {
    let d = new Date().toLocaleDateString();
    this._operations.push(`${d} ${operations}`);
  }
  afficher(): void {
    for (const iterator of this._operations) {
      console.log(iterator);
    }
  }
}
