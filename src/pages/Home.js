import "./Home.scss";
import { useState } from "react";
import girlMobile from "./../assets/images/girl-mobile.png";
import carMobile from "./../assets/images/car-mobile.png";
import starsMobile from "./../assets/images/stars-mobile.png";
import clsx from "clsx";

export const Home = () => {
  const [termns, setTermns] = useState(false);

  return (
    <div className="home">
      <div className="background-gray"></div>
      <div className="hero">
        <div className="text">
          <span className="text__top">¡Nuevo!</span>
          <h1 className="text__title">
            {" "}
            Seguro
            <span className="red middle-custom"> Vehicular </span>
            <span className="red"> Tracking </span>
          </h1>
          <div className="text__bottom">
            Cuentanos donde le harás seguimiento a tu seguro
          </div>
        </div>
        <div className="hero__right">
          <img className="car" src={carMobile} alt="" />
          <img className="girl" src={girlMobile} alt="" />
          <img className="stars" src={starsMobile} alt="" />
        </div>
      </div>
      <form className="form">
        <div className="title">Déjanos tus datos</div>
        <div className="personal-data">
          <label>
            <input
              className="input"
              type="number"
              name="doc"
              placeholder="Nro. de doc"
            />
          </label>
          <label>
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="Celular"
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              name="Cotízalo"
              placeholder="Placa"
            />
          </label>
        </div>
        <div className="termns">
          <label>
            <input
              type="checkbox"
              className="termns__checkbox"
              checked={termns}
              required
              onChange={() => setTermns((state) => !state)}
            />
            <div
              className={clsx("termns__checkbox-custom", termns && "checked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </label>
          <div className="text">
            Acepto la{" "}
            <a href="" className="link">
              Política de Protección de Datos Personales
            </a>{" "}
            y los{" "}
            <a className="link" href="">
              Términos y Condiciones.
            </a>
          </div>
        </div>
        <div>
          <input className="button-primary" type="submit" value="Cotízalo" />
        </div>
      </form>
    </div>
  );
};

export default Home;
