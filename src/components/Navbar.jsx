import { useEffect, useState, useCallback, memo } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import imageLarge from "../images/navbarlogo.webp";
import imageSmall from "../images/pslogosmall.webp";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { guidesData } from "../data/guidesData";
import { useAuthContext } from "../Login/useAuthContext";

const GUIDE_SHORT_LABELS = {
  "/guides/jstoreact": "JS → React",
  "/guides/reactintro": "React Intro",
  "/guides/componentsprops": "Components & Props",
  "/guides/reacttodo": "Todo App",
  "/guides/usestate": "useState",
  "/guides/useeffect": "useEffect",
  "/guides/stateeffect": "useState + useEffect",
  "/guides/reactforms": "React Forms",
  "/guides/usecontext": "useContext",
  "/guides/reacttodo2": "Todo App — Part 2",
  "/guides/usereducer": "useReducer",
  "/guides/customhooks": "Custom Hooks",
  "/guides/reactrouter": "React Router",
  "/guides/datafetching": "Data Fetching",
  "/guides/reactoptimisation": "Optimisation",
  "/guides/reactstatemanagement": "State Management",
  "/guides/mernstack": "MERN Stack",
};

const LockIcon = () => (
  <svg
    width='11'
    height='11'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ flexShrink: 0, opacity: 0.6 }}
  >
    <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
    <path d='M7 11V7a5 5 0 0 1 10 0v4' />
  </svg>
);

const MenuDropdown = ({
  isResponsive = false,
  handleLinkClick,
  handleLogout,
  closeDropdown,
}) => (
  <div
    className={`dropdown-menu menu-dropdown ${isResponsive ? "responsive" : ""}`}
    role='menu'
    onMouseLeave={!isResponsive ? closeDropdown : undefined}
  >
    <Link
      to='/finished-tasks'
      className='dropdown-link menu-item'
      onClick={handleLinkClick}
    >
      Finished Tasks
    </Link>
    <Link
      to='/progress'
      className='dropdown-link menu-item'
      onClick={handleLinkClick}
    >
      Progress
    </Link>
    <button
      className='dropdown-link menu-item signout-item'
      onClick={handleLogout}
    >
      Sign Out
    </button>
  </div>
);

const DropdownMenu = ({
  items,
  isResponsive = false,
  handleLinkClick,
  closeDropdown,
  isSubscribed,
}) => (
  <div
    className={`dropdown-menu ${isResponsive ? "responsive" : ""}`}
    role='menu'
    onMouseLeave={!isResponsive ? closeDropdown : undefined}
  >
    {items.map((item, index) => (
      <div className='dropdown-item' key={index}>
        <Link
          to={item.main.to}
          className='dropdown-link'
          onClick={handleLinkClick}
        >
          {item.main.label}
        </Link>
        {!isResponsive && (
          <div className='sub-dropdown-menu'>
            {item.subItems.map((subItem, subIndex) => {
              const showLock = subItem.isPremium && !isSubscribed;
              return (
                <Link
                  to={subItem.to}
                  className={`sub-dropdown-item ${showLock ? "sub-dropdown-item--locked" : ""}`}
                  key={subIndex}
                  onClick={handleLinkClick}
                >
                  <span>{subItem.label}</span>
                  {showLock && <LockIcon />}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    ))}
  </div>
);

const Navbar = memo(() => {
  const { isLoggedIn, subscriptionStatus } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 480 : false,
  );
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const getDropdownItems = useCallback(
    () => [
      {
        title: "Learn",
        items: [
          {
            main: { to: "/exercises", label: "React Exercises" },
            subItems: [
              { to: "/exercises/reactlessons", label: "Dynamic Interfaces" },
              { to: "/exercises/reacttasks", label: "React Tasks" },
              { to: "/exercises/livelessons", label: "Live Projects" },
              { to: "/exercises/workshoplist", label: "Build with Me" },
            ],
          },
          ...(isLoggedIn
            ? [
                {
                  main: { to: "/interview", label: "React Interview" },
                  subItems: [
                    {
                      to: "/interview/interview-questions",
                      label: "Interview Questions",
                    },
                    {
                      to: "/interview/interview-tasks",
                      label: "Interview Tasks",
                    },
                    {
                      to: "/interview/interview-quiz/:slug",
                      label: "Interview Quiz",
                    },
                    {
                      to: "/interview/interview-code-quiz",
                      label: "Code Quiz",
                    },
                    {
                      to: "/interview/interview-correct-code/:slug",
                      label: "Correct Code",
                    },
                  ],
                },
              ]
            : []),
          {
            main: { to: "/guides", label: "Guides" },
            subItems: guidesData.map((guide) => ({
              to: guide.to,
              label: GUIDE_SHORT_LABELS[guide.to] || guide.title,
              isPremium: guide.isPremium,
            })),
          },
        ],
      },
    ],
    [isLoggedIn],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar-container")) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((type) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  }, []);

  const handleLogout = useCallback(() => {
    auth
      .signOut()
      .then(() => {
        toast.success("You have been signed out successfully!");
        handleLinkClick();
      })
      .catch((error) => console.error(error.message));
  }, [handleLinkClick]);

  const toggleMenu = useCallback((e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Removed the duplicate declaration here
  const dropdownItems = getDropdownItems();

  const navLinks = [
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Articles" },
    { to: "/faq", label: "FAQ" },
  ];

  const loggedInLinks = [
    { to: "/livechat", label: "LiveChat" },
    { to: "/authors", label: "Authors" },
  ];

  return (
    <nav id='nav' className={isScrolled ? "scrolled" : ""}>
      <div className='navbar-container'>
        <Link to='/' onClick={handleLinkClick}>
          <img
            src={isMobile ? imageSmall : imageLarge}
            alt='Project School Logo'
            width={isMobile ? 40 : 180}
            height={isMobile ? 40 : 60}
            fetchPriority='high'
          />
        </Link>

        <div className='middle'>
          <div className='nav-dropdown'>
            <button
              onClick={() => toggleDropdown("exercises")}
              className='nav-link dropdown-trigger'
            >
              Learn <span className='dropdown-arrow'></span>
            </button>
            {activeDropdown === "exercises" && (
              <DropdownMenu
                items={dropdownItems[0].items}
                handleLinkClick={handleLinkClick}
                closeDropdown={closeDropdown}
                isSubscribed={isSubscribed}
              />
            )}
          </div>

          {isLoggedIn &&
            loggedInLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className='nav-link'
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className='nav-link'
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {isLoggedIn ? (
          <div className='menu-dropdown-container profile-menu'>
            <button
              onClick={() => toggleDropdown("profile")}
              className='button-35 dropdown-trigger'
            >
              Menu <span className='dropdown-arrow'></span>
            </button>
            {activeDropdown === "profile" && (
              <MenuDropdown
                handleLinkClick={handleLinkClick}
                handleLogout={handleLogout}
                closeDropdown={closeDropdown}
              />
            )}
          </div>
        ) : (
          <div className='auth-buttons'>
            <Link to='/login' className='button-35' onClick={handleLinkClick}>
              Login
            </Link>
            <Link to='/signup' className='button-35' onClick={handleLinkClick}>
              Sign Up
            </Link>
          </div>
        )}

        <button
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className='menu-icon__line'></div>
          <div className='menu-icon__line'></div>
          <div className='menu-icon__line'></div>
        </button>

        <div className={`responsive-links ${isMenuOpen ? "open" : ""}`}>
          <div className='responsive-dropdown'>
            <button
              onClick={() => toggleDropdown("responsive")}
              className='responsive-nav-link dropdown-trigger'
            >
              Learn <span className='dropdown-arrow'></span>
            </button>
            {activeDropdown === "responsive" && (
              <DropdownMenu
                items={dropdownItems[0].items}
                isResponsive={true}
                handleLinkClick={handleLinkClick}
                closeDropdown={closeDropdown}
                isSubscribed={isSubscribed}
              />
            )}
          </div>

          {isLoggedIn &&
            loggedInLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className='responsive-nav-link'
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className='responsive-nav-link'
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn && (
            <div className='responsive-dropdown'>
              <button
                onClick={() => toggleDropdown("mobileProfile")}
                className='responsive-nav-link dropdown-trigger'
              >
                Menu <span className='dropdown-arrow'></span>
              </button>
              {activeDropdown === "mobileProfile" && (
                <MenuDropdown
                  isResponsive={true}
                  handleLinkClick={handleLinkClick}
                  handleLogout={handleLogout}
                  closeDropdown={closeDropdown}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
