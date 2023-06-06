import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);

  stationMeteo.ajouterSubscriber(aff);
  stationMeteo.ajouterSubscriber(aff2);

  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  stationMeteo.humidité++;

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
  }
}

main();
