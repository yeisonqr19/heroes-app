import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const params = useParams();
  const { heroeid } = params;

  const heroe = useMemo(() => getHeroById(heroeid), [heroeid]);

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (heroeid.indexOf("dc") === 0) {
      history.push("/dc");
      return;
    }
    if (heroeid.indexOf("marvel") === 0) {
      history.push("/marvel");
      return;
    }

    history.goBack();
  };

  // const handleReturn = () => {
  //   history.goBack();
  // };

  const { superhero, alter_ego, first_appearance, characters, publisher } =
    heroe;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroeid}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__backInDown"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>

          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className="btn btn-dark">
          Return
        </button>
      </div>
    </div>
  );
};
