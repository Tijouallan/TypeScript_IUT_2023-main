import { CompteBanquaire } from "./compte_banquaire";
import { Journalisation } from "./journalisation";
function main(): void {
  const compte1 = new CompteBanquaire(123);
  compte1.créditer(100);
  compte1.débiter(80);
  compte1.débiter(20);
  const journal = Journalisation.instance;

  /*
  journal.journaliser(compte1, "creation du compte banquaire");
  journal.journaliser(compte1, "Debit de 1000 €");
  journal.journaliser(compte1, "Crédit de 2000€");
  journal.journaliser(compte1, "Débit de 500€");

  const compte2 = new CompteBanquaire(321);
  const journal2 = Journalisation.instance;
  journal2.journaliser(compte2, "Création du compte bancaire");
  */

  console.log("Afficher de journal");
  journal.afficher();
}

main();
