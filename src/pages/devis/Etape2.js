import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
export default function Etape2() {
  const router = useRouter();
  const [type, setType] = useState(router.query.type ?? "pompageSoleil");
  const [technology, setTechnology] = useState(
    router.query.technology ?? "Allemande"
  );
  const [showOptions1, setShowOptions1] = useState(false);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const handleSelect1 = (value) => {
    setTechnology(value);
    setShowOptions1(false)
  };
  const [showOptions2, setShowOptions2] = useState(false);

  const handleSelect2 = (value) => {
    setType(value);
    setShowOptions2(false);

  };
  const handleDropdownClick1 = () => {
    setShowOptions1(!showOptions1);
  };
  const handleDropdownClick2 = () => {
    setShowOptions2(!showOptions2);
  };
  const handleOptionClick1 = (value) => {
    handleSelect1(value);
    dropdownRef1.current.focus();
  };
  const handleOptionClick2 = (value) => {
    handleSelect2(value);
    dropdownRef2.current.focus();
  };



  return (
    <div className="wrapper2">
      <Navbar />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row marginize-top cardFormulaire-title  justify-content-center  ">
              Etape 2 : Votre Projet
            </h4>
          </div>
          <div >
            <div className="row  justify-content-center">
              <div className="formSelect1">
                <div className="selectDropdown1" tabIndex="0" onClick={handleDropdownClick1} ref={dropdownRef1}
                >
                  <span>{technology || 'Choose technology'}</span>
                  <span className="selectArrow1"></span>
                </div>
              {showOptions1 && (
              <div className="selectOptions1">
                <div
                  className="selectOption1"
                  onClick={() => handleSelect1('Allemande')
                }
                >
                  Allemande
                </div>
                <div
                  className="selectOption1"
                  onClick={() => handleOptionClick1('Chinoise')}
                >
                  Chinoise
                </div>
              </div>
              )}
              </div>
            </div>
            <div className="row  justify-content-center">
            <div className="formSelect1">
              <div className="selectDropdown1" tabIndex="0" onClick={handleDropdownClick2} ref={dropdownRef2}
              >
                <span>{type || 'Choose Type'}</span>
                <span className="selectArrow1"></span>
              </div>
            {showOptions2 && (
            <div className="selectOptions1">
              <div
                className="selectOption1"
                onClick={() => handleSelect2('Pompage au fil de soleil')
              }
              >
              Pompage au fil de soleil
              </div>
              <div
                className="selectOption1"
                onClick={() => handleOptionClick2('Pompage raccordé STEG')}
              >
              Pompage raccordé STEG
              </div>
              <div
              className="selectOption1"
              onClick={() => handleOptionClick2('Maison raccordé STEG')}
            >
              Maison raccordé STEG
              </div>
              <div
              className="selectOption1"
              onClick={() => handleOptionClick2('Maison non raccordé STEG')}
              >
              Maison non raccordé STEG
            </div>
              </div>
              )}
              </div>
          </div>
            <div className="abc">
              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Cordonnees",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                    },
                  });
                }}
              >
                Précédent
              </button>
              <button
                className="form-button"
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
                      type: type,
                      technology: technology,
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
