import { useState } from "react";
import clsx from "clsx";
import "./Toggle.scss";

export default function Toggle({ data = {}, state, setterState, id }) {
  const [showAll, setShowAll] = useState(false);
  const { title = "", description = "", imgUrl } = data;

  return (
    <div className="card">
      <img className="card__icon" src={imgUrl} alt="" />
      <div className="card__right">
        <div className="card__top">
          <div className="card__top--title">{title}</div>
          <label className="card__switch" htmlFor={id}>
            <input
              className="card__switch--input"
              type="checkbox"
              id={id}
              checked={state}
              onChange={() => setterState(!state)}
            />
            <div className="card__switch slider round"></div>
          </label>
        </div>
        <div className={clsx("card__description", showAll && "open")}>
          {description}
        </div>
        <button
          className="card__toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
