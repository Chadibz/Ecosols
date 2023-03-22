import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Cordonnees() {
  const router = useRouter();
  const [firstName, setFirstName] = useState(router.query.firstName ?? "");
  const [lastName, setLastName] = useState(router.query.lastName ?? "");
  const [phoneNumber, setPhoneNumber] = useState(
    router.query.phoneNumber ?? ""
  );
  const [email, setEmail] = useState(router.query.email ?? "");
  const [adress, setAdress] = useState(router.query.adress ?? "");
  const [job, setJob] = useState(router.query.job ?? "");
  const [age, setAge] = useState(router.query.age ?? "");
  return (
    <div className="wrapper2">
      <Navbar />
      <div className=" container whole-page justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 1 : Inserer vos données
            </h4>
          </div>
          <div>
            <div className="row justify-content-center ">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={lastName}
                className="formInput"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                className="formInput"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="formInput"
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="formInput"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="adresse"
                placeholder="Adresse"
                className="formInput"
                value={adress}
                onChange={(event) => {
                  setAdress(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <input
                type="text"
                name="fonction"
                placeholder="Fonction"
                className="formInput"
                value={job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div>
            <div className="row justify-content-center ">
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="formInput"
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>
            <div className="row justify-content-end">
              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
                    query: {
                      firstName: firstName,
                      lastName: lastName,
                      phoneNumber: phoneNumber,
                      email: email,
                      adress: adress,
                      job: job,
                      age: age,
                    },
                  });
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
