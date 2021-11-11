import "./Plan.scss";
import rimacBoy from "./../assets/images/rimac-boy.png";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import clsx from "clsx";
import Toggle from "components/Toggle";
import { UserContext } from "UserContext";

const cardsData = [
  {
    title: "LLanta robada",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    imgUrl: "/images/icon-plan-1.png",
  },
  {
    title: "Choque y/o pasarte la luz roja",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    imgUrl: "/images/icon-plan-2.png",
  },
  {
    title: "Atropello en la vía Evitamiento",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
    imgUrl: "/images/icon-plan-3.png",
  },
];

export const Plan = () => {
  const { userData } = useContext(UserContext);

  const [sumValue, setSumValue] = useState(14.3);
  const [cobertura1, setCobertura1] = useState(false);
  const [cobertura2, setCobertura2] = useState(false);
  const [cobertura3, setCobertura3] = useState(false);
  const [subtitleOpen, setSubtitleOpen] = useState("first");

  const handleAddSumValue = () => {
    const maxValue = 16.5;
    setSumValue((num) => {
      const newValue = num + 0.5;
      return newValue <= maxValue ? newValue : num;
    });
  };

  const handleSubstractSumValue = () => {
    const minValue = 12.5;
    setSumValue((num) => {
      const newValue = num - 0.5;
      return newValue >= minValue ? newValue : num;
    });
  };

  return (
    <>
      <div className="separator"></div>
      <div className="background-steps"></div>
      <div className="steps">
        <div className="steps__web">
          <div className="step">
            <div className="circle">
              <div className="circle__first">1</div>
            </div>
            Datos
          </div>
          <div className="step">
            <div className="circle circle__second active">
              <div className="circle__second">2</div>
            </div>
            Arma tu plan
          </div>
        </div>
        <Link to="/home" className="back"></Link>
        <div className="steps__text mobile">Paso 2 de 2</div>
        <div className="steps__progress-bar"></div>
      </div>
      <section className="boy-section">
        <div className="boy-section__top">
          <div className="boy-section__title--web">
            ¡Hola, <span className="red">{userData.name}</span>
          </div>
          <div className="boy-section__title">Mira las coberturas</div>
          <div className="boy-section__subtitle">
            Conoce las coberturas para tu plan
          </div>
          <div className="card">
            <div className="card__text">
              <div className="placa">Placa: {userData.placa}</div>
              <div className="car-details">Wolkswagen 2019 Golf</div>
            </div>
            <img className="card__boy" src={rimacBoy} alt="rimac-boy" />
          </div>
        </div>
      </section>
      <section className="sum-form">
        <div className="sum-form__title">Indica la suma asegurada</div>
        <div className="sum-form__subtitle">MIN $12.500 | MAX $16,500</div>
        <div className="sum-form__input">
          <div
            className="sum-form__input--button less"
            onClick={handleSubstractSumValue}
          ></div>
          <div className="sum-form__input--price">$ {sumValue}</div>
          <div
            className="sum-form__input--button more"
            onClick={handleAddSumValue}
          ></div>
        </div>
      </section>
      <section className="coberturas">
        <div className="title">Agrega o quita coberturas</div>
        <div className="wrap">
          <div className="menu">
            <div
              className={clsx(
                "menu__subtitle",
                subtitleOpen === "first" && "active"
              )}
              onClick={() => {
                setSubtitleOpen("first");
              }}
            >
              Protege a tu auto
            </div>
            <div
              className={clsx(
                "menu__subtitle",
                subtitleOpen === "second" && "active"
              )}
              onClick={() => {
                setSubtitleOpen("second");
              }}
            >
              Protege a los que te rodean
            </div>
            <div
              className={clsx(
                "menu__subtitle",
                subtitleOpen === "third" && "active"
              )}
              onClick={() => {
                setSubtitleOpen("third");
              }}
            >
              Mejora tu plan
            </div>
          </div>
          <div className="cards">
            <Toggle
              data={cardsData[0]}
              state={cobertura1}
              setterState={setCobertura1}
              id="cobertura1"
            />
            <Toggle
              data={cardsData[1]}
              state={cobertura2}
              setterState={setCobertura2}
              id="cobertura2"
            />
            <Toggle
              data={cardsData[2]}
              state={cobertura3}
              setterState={setCobertura3}
              id="cobertura3"
            />
          </div>
        </div>
      </section>
      <section className="bottom">
        <div>
          <div>Monto</div>
          <div className="bottom__price">$35.00</div>
          <div className="bottom__cycle">Mensual</div>
        </div>
        <div className="web ">El precio incluye:</div>
        <div className="bottom__checked web">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z"
              fill="#43B748"
            />
          </svg>
          Llanta de repuesto
        </div>
        <div className="bottom__checked web">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z"
              fill="#43B748"
            />
          </svg>
          Analisis de motor
        </div>
        <div className="bottom__checked web">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z"
              fill="#43B748"
            />
          </svg>
          Aros gratis
        </div>
        <button className="button-primary">Lo quiero</button>
      </section>
    </>
  );
};

export default Plan;
