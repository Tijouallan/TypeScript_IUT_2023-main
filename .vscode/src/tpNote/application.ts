import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { Journalisation } from "./journalisation";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);

  stationMeteo.ajouterSubscriber(aff);
  stationMeteo.ajouterSubscriber(aff2);

  console.log("Afficher le graphique (Y/N)");
  let reponse = rs.question();

  if (reponse == "y" || reponse == "Y") {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    const journal = Journalisation.instance;
    journal.affiche(stationMeteo.temperature, stationMeteo.humidité);
    for (let p = 0; p < 10; p++) {
      console.log("Appuyez sur entrée pour le prochain affichage");
      rs.question();

      stationMeteo.humidité--;
      stationMeteo.temperature += 2;
      journal.affiche(stationMeteo.temperature, stationMeteo.humidité);
    }

    for (let p = 0; p < 10; p++) {
      console.log("Appuyez sur entrée pour le prochain affichage");
      rs.question();

      stationMeteo.humidité++;
      stationMeteo.temperature -= 3;
      journal.affiche(stationMeteo.temperature, stationMeteo.humidité);
    }
  } else {
  }
}
main();
