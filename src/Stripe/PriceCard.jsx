import PropTypes from "prop-types";
import "../styles/checkout.css";

const PriceCard = ({
  title,
  price,
  advantages,
  buttonText,
  onButtonClick,
  isLoading,
}) => {
  const isFree = title === "Free";
  const isMonthly = title === "Monthly";
  const isAnnual = title === "Annual";

  const getCardClass = () => {
    if (isMonthly) return "pricing-card featured";
    if (isAnnual) return "pricing-card annual";
    return "pricing-card";
  };

  const getPeriodText = () => {
    if (isFree) return "Forever free";
    if (isMonthly) return "per month";
    if (isAnnual) return "per year (£8.33/mo)";
    return "";
  };

  const getBadge = () => {
    if (isMonthly) return <div className='pricing-badge'>Most Popular</div>;
    if (isAnnual) return <div className='pricing-badge save'>Save 44%</div>;
    return null;
  };

  return (
    <div className={getCardClass()}>
      {getBadge()}

      <p className='pricing-tier'>{title}</p>

      <p className='pricing-price'>
        <span className='currency'>£</span>
        {price}
      </p>

      <p className='pricing-period'>{getPeriodText()}</p>

      <ul className='pricing-features'>
        {advantages.map((advantage, index) => {
          const isHighlight = isAnnual && index === advantages.length - 1;

          return (
            <li
              key={index}
              className={isHighlight ? "highlight-feature" : ""}
            >
              {advantage}
            </li>
          );
        })}
      </ul>

      <button
        className={`pricing-btn ${
          isMonthly || isAnnual ? "btn-primary" : "btn-secondary"
        }`}
        onClick={onButtonClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className='spinner'></span>
            Processing...
          </>
        ) : (
          buttonText
        )}
      </button>
    </div>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

PriceCard.defaultProps = {
  isLoading: false,
};

export default PriceCard;