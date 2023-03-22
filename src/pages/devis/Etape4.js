import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape4() {
  const router = useRouter();
  const type = router.query.type;
  const [estimation, setEstimation] = useState(
    router.query.estimation ?? type === "pompageSoleil" ? 4 : 2
  );
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const handleSelect = (value) => {
    setOrientation(value);
    setShowOptions(false)
  };
  const handleDropdownClick = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (value) => {
    handleSelect(value);
    dropdownRef.current.focus();
  };

  return (
    <div className="wrapper2">
      <Navbar />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 4 : Votre Consommation
            </h4>
          </div>
          <div>
            {type === "pompageSteg" || type === "maisonSteg" ? (
              <div className=" row  justify-content-center ">
                <div className="col">
                  <label>Electricité:</label>
                </div>
                <div className="row  justify-content-center ">
                  <select
                    name="estimation"
                    type="text"
                    placeholder="type de votre projet"
                    className="formSelect form-select"
                    value={estimation}
                    onChange={(event) => {
                      setEstimation(event.target.value);
                    }}
                  >
                    <option value="2">100 DT</option>
                    <option value="2.5">150 DT</option>
                    <option value="3">200 DT</option>
                    <option value="4">Plus que 200 DT</option>
                  </select>
                </div>
              </div>
            ) : (
              <></>
            )}
            {type === "pompageSoleil" ? (
              <div className=" row  justify-content-center ">
                <div className="col">
                  <label>Puissance Pompe:</label>
                </div>
                <div className="row  justify-content-center ">
                  <select
                    name="estimation"
                    type="text"
                    placeholder="type de votre projet"
                    className="formSelect form-select"
                    value={estimation}
                    onChange={(event) => {
                      setEstimation(event.target.value);
                    }}
                  >
                    <option value="4">3 HP</option>
                    <option value="5">4 HP</option>
                    <option value="6.5">5.5 HP</option>
                    <option value="9">7.5 HP</option>
                    <option value="12">10 HP</option>
                    <option value="18">15 HP</option>
                    <option value="22">20 HP</option>
                    <option value="27">25 HP</option>
                  </select>
                </div>
              </div>
            ) : (
              <></>
            )}
            {type === "maisonNonSteg" ? (
              <div className=" row  justify-content-center ">
                <div className="col">
                  <label>Estimation de l'installation:</label>
                </div>
                <div className="row  justify-content-center ">
                  <select
                    name="estimation"
                    type="text"
                    placeholder="type de votre projet"
                    className="formSelect form-select"
                    value={estimation}
                    onChange={(event) => {
                      setEstimation(event.target.value);
                    }}
                  >
                    <option value="1">1 KWC</option>
                    <option value="2">2 KWC</option>
                    <option value="3">3 KWC</option>
                  </select>
                </div>
              </div>
            ) : (
              <></>
            )}

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

              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape5",
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
                      estimation: estimation,
                    },
                  });
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
