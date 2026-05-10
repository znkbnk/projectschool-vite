import { Link } from "react-router-dom";
import "../styles/lockedOverlay.css";

/**
 * LockedOverlay - Displays over locked/paid project cards
 * Shows a lock icon and upgrade CTA for non-subscribed users
 * If user is not logged in, directs to signup
 * If user is logged in but not subscribed, directs to pricing/upgrade
 */
function LockedOverlay({ isLoggedIn }) {
  return (
    <div className='locked-overlay'>
      <div className='locked-content'>
        <div className='locked-icon'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
            <path d='M7 11V7a5 5 0 0 1 10 0v4' />
          </svg>
        </div>
        <p className='locked-text'>Premium Project</p>
        <Link
          to={isLoggedIn ? "/pricing" : "/signup"}
          className='locked-cta-button'
        >
          {isLoggedIn ? "Upgrade to Unlock" : "Sign Up to Unlock"}
        </Link>
      </div>
    </div>
  );
}

export default LockedOverlay;
