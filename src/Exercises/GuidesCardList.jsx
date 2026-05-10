import { memo } from "react";
import GuidesCard from "./GuidesCard";
import LockedOverlay from "./LockedOverlay";
import { guidesData } from "../data/guidesData";
import { useAuthContext } from "../Login/useAuthContext";
import "../styles/exercises.css";

const GuidesCardList = memo(() => {
  const { isLoggedIn, subscriptionStatus } = useAuthContext();
  const isSubscribed = subscriptionStatus?.toLowerCase() === "subscribed";

  return (
    <div className='wrapper'>
      {guidesData.map((guide, index) => {
        const isLocked = guide.isPremium && !isSubscribed;

        if (isLocked) {
          return (
            <div key={guide.to || index} className='exercises-card is-locked'>
              <LockedOverlay isLoggedIn={isLoggedIn} />
              <div className='exercises-card__body'>
                <img
                  src={guide.img}
                  className='exercises-card__image locked-image'
                  alt={guide.title}
                  loading='lazy'
                  decoding='async'
                />
                <h2 className='exercises-card__title'>{guide.title}</h2>
                <p className='exercises-card__description'>{guide.desc}</p>
                <span className='exercises-card__btn'>Start</span>
              </div>
            </div>
          );
        }

        return (
          <GuidesCard
            key={guide.to || index}
            img={guide.img}
            title={guide.title}
            desc={guide.desc}
            to={guide.to}
          />
        );
      })}
    </div>
  );
});

GuidesCardList.displayName = "GuidesCardList";

export default GuidesCardList;
