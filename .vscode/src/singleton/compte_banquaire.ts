import { Journalisation } from "./journalisation";

export class CompteBanquaire {
  private _numéro: number;
  private _solde: number;

  constructor(numéro: number, solde = 0) {
    this._numéro = numéro;
    this._solde = solde;
  }

  get numéro(): number {
    return this._numéro;
  }
  get solde(): number {
    return this._solde;
  }

  débiter(montant: number): void {
    if (this._solde < montant)
      throw new Error("vous ne pouvez pas debiter un montant supérieur à votre solde !");
    this._solde -= montant;
  }
  créditer(montant: number): void {
    Journalisation.instance.journaliser("compte " + this._numéro + " crédit de " + montant + " €");
    this._solde += montant;
  }
}
