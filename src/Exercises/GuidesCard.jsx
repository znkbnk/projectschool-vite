import  { memo } from "react";
import { Link } from "react-router-dom";
import { prefetchGuide } from "../utils/guidePrefetch";
import "../styles/exercises.css";

const GuidesCard = memo(({ img, title, desc, to }) => {
  return (
    <div className="exercises-card">
      <div className="exercises-card__body">
        <img
          src={img}
          className="exercises-card__image"
          alt={title}
          loading="lazy"
          decoding="async"
        />
        <h2 className="exercises-card__title">{title}</h2>
        <p className="exercises-card__description">{desc}</p>
        <Link
          to={to}
          className="exercises-card__btn"
          onMouseEnter={() => prefetchGuide(to)}
          onTouchStart={() => prefetchGuide(to)}
        >
          Start
        </Link>
      </div>
    </div>
  );
});

GuidesCard.displayName = "GuidesCard";

export default GuidesCard;