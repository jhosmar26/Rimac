import "./Plan.scss";
import rimacBoy from "./../assets/images/rimac-boy.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import Toggle from "components/Toggle";

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

  const handleShowMore = () => {
    console.log("aea manooo");
  };

  return (
    <>
      <div className="separator"></div>
      <div className="background-steps"></div>
      <div className="steps">
        <Link to="/home" className="back"></Link>
        <div className="steps__text">Paso 2 de 2</div>
        <div className="steps__progress-bar"></div>
      </div>
      <section className="boy-section">
        <div className="boy-section__top">
          <div className="boy-section__title--web">
            ¡Hola, <span className="red">Juan!</span>
          </div>
          <div className="boy-section__title">Mira las coberturas</div>
          <div className="boy-section__subtitle">
            Conoce las coberturas para tu plan
          </div>
          <div className="card">
            <div className="card__text">
              <div className="placa">Placa: C2U-114</div>
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
          <div className="bottom__price">$35.00</div>
          <div className="bottom__cycle">Mensual</div>
        </div>
        <button className="button-primary">Lo quiero</button>
      </section>
    </>
  );
};

export default Plan;
