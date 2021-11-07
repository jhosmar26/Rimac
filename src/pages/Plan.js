import "./Plan.scss";
import rimacBoy from "./../assets/images/rimac-boy.png";
import { Link } from "react-router-dom";

export const Plan = () => {
  return (
    <>
      <div className="separator"></div>
      <div className="background-steps"></div>
      <div className="steps">
        <Link to="/home" class="back"></Link>
        <div className="steps__text">Paso 1 de 2</div>
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
        <div class="card-data"></div>
      </section>
    </>
  );
};

export default Plan;
