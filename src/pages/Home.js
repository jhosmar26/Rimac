import "./Home.scss";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import girlMobile from "./../assets/images/girl-mobile.png";
import carMobile from "./../assets/images/car-mobile.png";
import starsMobile from "./../assets/images/stars-mobile.png";
import girlWeb from "./../assets/images/girl-web.png";
import backgroundWeb from "./../assets/images/background-web.png";
import clsx from "clsx";
import { UserContext } from "UserContext";

const tipoDocumentoArr = ["DNI", "Pasaporte"];

export const Home = () => {
  const [termns, setTermns] = useState(false);
  const [documento, setDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState(0);
  const [celular, setCelular] = useState("");
  const [placa, setPlaca] = useState("");
  const [buttonAble, setButtonAble] = useState(false);

  const history = useHistory();

  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (termns === true && documento !== "" && celular !== "" && placa !== "") {
      setButtonAble(true);
    } else {
      setButtonAble(false);
    }
  }, [termns, documento, celular, placa]);

  const handlePlaca = (event) => {
    setPlaca(event.target.value);
  };

  const handleTipoDocumento = (event) => {
    setTipoDocumento(event.target.value);
    console.log(tipoDocumento);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      name: "Juan",
      documento,
      tipoDocumento,
      celular,
      placa,
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(dataForm),
      },
    });
    const dataPost = await response.json();
    const dataUser = { ...dataForm, ...dataPost };
    setUserData(dataUser);
    history.push("/arma-tu-plan");
  };

  return (
    <div className="home">
      <div className="background-gray"></div>
      <div className="hero">
        <img
          className="background-web"
          src={backgroundWeb}
          alt="background-web"
        />
        <img className="girl-web" src={girlWeb} alt="girl-logo" />
        <div className="text">
          <span className="text__top">??Nuevo!</span>
          <h1 className="text__title">
            {" "}
            Seguro
            <span className="red middle-custom"> Vehicular </span>
            <span className="red"> Tracking </span>
          </h1>
          <div className="text__bottom">
            Cuentanos donde le har??s seguimiento a tu seguro
          </div>
        </div>
        <div className="hero__right">
          <img className="car" src={carMobile} alt="car-mobile" />
          <img className="girl" src={girlMobile} alt="girl-mobile" />
          <img className="stars" src={starsMobile} alt="stars-mobile" />
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">D??janos tus datos</div>
        <div className="personal-data">
          <div>
            <label>
              <select
                className="hidden"
                name="tipoDocumentos"
                value={tipoDocumento}
                onChange={handleTipoDocumento}
                required
              >
                <option value="0">{tipoDocumentoArr[0]}</option>
                <option value="1">{tipoDocumentoArr[1]}</option>
              </select>
            </label>
            <input
              className="input"
              type="text"
              name="doc"
              placeholder="Nro. de doc"
              title="Solo n??meros"
              value={documento}
              onChange={(event) => setDocumento(event.target.value)}
              required
            />
            <label></label>
          </div>
          <label>
            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Celular"
              pattern="[0-9]{9}"
              maxlength="9"
              title="Nueve digitos, solo n??meros"
              value={celular}
              onChange={(event) => setCelular(event.target.value)}
              required
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              name="placa"
              placeholder="Placa"
              maxlength="6"
              minlength="6"
              value={placa}
              onChange={handlePlaca}
              required
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
            <a href="/" className="link">
              Pol??tica de Protecci??n de Datos Personales
            </a>{" "}
            y los{" "}
            <a href="/" className="link">
              T??rminos y Condiciones.
            </a>
          </div>
        </div>
        <input
          className={clsx("button-primary", buttonAble ? "" : "disabled")}
          type="submit"
          value="Cot??zalo"
        />
      </form>
    </div>
  );
};

export default Home;
