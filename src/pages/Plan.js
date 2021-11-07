import "./Plan.scss";
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
    </>
  );
};

export default Plan;
