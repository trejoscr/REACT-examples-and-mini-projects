import { Link } from "react-router-dom"

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const heroImageUrl = `/heroes/${id}.jpg`;

  const charactersByHero = (<p>{characters}</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">

          <div className="col-12 col-lg-4">
            <img src={heroImageUrl} alt={superhero} className="card-img"/>
          </div>

          <div className="row-12 col-lg-8 p-4 p-lg-2">
            <h5>{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters) && charactersByHero
            }

            <p className="card-text">
              <small>{first_appearance}</small>
            </p>

            <Link to={`/hero/${id}`}>
              More ...
            </Link>
            
          </div>
          
        </div>

      </div>
    </div>
  )
}
