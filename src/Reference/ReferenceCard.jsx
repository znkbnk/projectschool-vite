import { Link } from "react-router-dom";
import "../styles/exercises.css";

const ReferenceCard = ({ img, title, desc, to }) => {
 

  return (
    <div className="exercises-card">
      <div className="exercises-card__body">
        <img src={img} className="exercises-card__image" alt={title} />
        <h2 className="exercises-card__title">{title}</h2>
        <p className="exercises-card__description">{desc}</p>
        <Link to={to} className="exercises-card__btn">
          Start
        </Link>
      </div>
    </div>
  );
};

export default ReferenceCard;
