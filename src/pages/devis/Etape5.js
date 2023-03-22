import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";

const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape5() {
  const router = useRouter();
  //a changer par des requete back pour avoir les variable a jour a chaque fois!!!!!!!!
  const puissanceAllemand = 5;
  const puissanceChinois = 3;

  async function sendResults() {
    //envoyer au backend les informations voici les variables et comment avoir leurs contenu
    // firstName: router.query.firstName,
    // lastName: router.query.lastName,
    // phoneNumber: router.query.phoneNumber,
    // email: router.query.email,
    // adress: router.query.adress,
    // job: router.query.job,
    // age: router.query.age,
    // type: router.query.type,
    // technology: router.query.technology,
    // place: router.query.place,
    // longeur: router.query.longeur,
    // largeur: router.query.largeur,
    // orientation: router.query.orientation,
    // estimation: router.query.estimation,
  }

  return (
    <div>
      <Navbar />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Résultats
            </h4>
          </div>
          <div>
            <div className=" row  justify-content-center ">
              puissance Installation : {router.query.estimation} KWC
            </div>
            <div className=" row  justify-content-center ">
              Technologie Choisie : {router.query.technology}
            </div>
            <div className=" row  justify-content-center ">
              Nombre de panneaux requis :
              {(router.query.estimation * 1000) / router.query.technology ===
              "Allemande"
                ? puissanceAllemand
                : puissanceChinois}
            </div>
            <div className=" row  justify-content-center ">
              Production annuelle : {router.query.estimation * 1700}
            </div>
            <div className=" row  justify-content-center ">
              Dimintion CO2 : {router.query.estimation * 0.77 * 25} T
            </div>
            <div className=" row  justify-content-center ">
              Gains économiques :{" "}
              {router.query.type === "pompageSteg" ||
              router.query.type === "maisonSteg"
                ? 3500
                : 2700 * router.query.estimation * 1700}
            </div>
            <div className="row justify-content-end">
              <button
                className="form-button "
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape3",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                      place: router.query.place,
                      longeur: router.query.longeur,
                      largeur: router.query.largeur,
                      orientation: router.query.orientation,
                    },
                  });
                }}
              >
                précédent
              </button>

              <button className="form-button" onClick={sendResults}>
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
