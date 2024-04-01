import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const hero = useMemo( () => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };
  
  
  if(!hero){
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row">
      <div className="col-12 col-lg-4 animate__animated animate__fadeInLeft">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"/>
      </div>
      <div className="col-12 col-lg-8 p-4 p-lg-2 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-dark"
          onClick={onNavigateBack}
        >
          Back
        </button>

      </div>
    </div>
  )
}
