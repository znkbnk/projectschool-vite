import React, { useState, useCallback, useEffect } from "react";
import styles from "./ReactExplained.module.css";
import ReactExplainedCard from "./ReactExplainedCard";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactExplainedCardsData from "../data/ReactExplainedCardsData";
import SearchReactFAQ from "./SearchReactFAQ";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const MAX_VISIBILITY = 3;

const ReactExplained = () => {
  const [activeRandom, setActiveRandom] = useState(0);
  const [activeList, setActiveList] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search input to reduce re-renders
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Filter cards based on debounced search term
  const filteredCards = ReactExplainedCardsData.filter(
    (card) =>
      card.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      card.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const getRandomIndex = useCallback(
    () => Math.floor(Math.random() * ReactExplainedCardsData.length),
    []
  );

  const handleNextCard = useCallback(
    (isListMode) => {
      if (isListMode) {
        if (activeList < filteredCards.length - 1) {
          setActiveList(activeList + 1);
        }
      } else {
        setActiveRandom(getRandomIndex());
      }
    },
    [activeList, filteredCards.length, getRandomIndex]
  );

  const handlePrevCard = useCallback(
    (isListMode) => {
      if (isListMode) {
        if (activeList > 0) {
          setActiveList(activeList - 1);
        }
      } else {
        setActiveRandom(getRandomIndex());
      }
    },
    [activeList, getRandomIndex]
  );

  const renderCards = useCallback(
    (isListMode) => {
      const cardsToRender = isListMode
        ? filteredCards
        : [ReactExplainedCardsData[activeRandom]];

      return cardsToRender.map((card, i) => (
        <div
          key={i}
          className={styles.cardContainer}
          style={{
            "--active": isListMode ? (i === activeList ? 1 : 0) : 1,
            "--offset": (activeList - i) / 3,
            "--direction": Math.sign(activeList - i),
            "--abs-offset": Math.abs(activeList - i) / 3,
            pointerEvents: isListMode && activeList === i ? "auto" : "none",
            opacity:
              isListMode && Math.abs(activeList - i) >= MAX_VISIBILITY
                ? "0"
                : "1",
            display:
              isListMode && Math.abs(activeList - i) > MAX_VISIBILITY
                ? "none"
                : "block",
          }}
        >
          <ReactExplainedCard title={card.title} content={card.content} />
        </div>
      ));
    },
    [activeList, activeRandom, filteredCards]
  );

  const isListMode = debouncedSearchTerm.length > 0;

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
         <div className="header">
        <h1 className='component-title'>Learn React: FAQs Answered</h1>
        <p className='header-subtitle'>
          {ReactExplainedCardsData.length} common React questions — search or browse through the cards.
        </p>
      </div>

      <SearchReactFAQ searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.container}>
        <div className={styles.carousel}>
          {isListMode ? (
            <>
              {activeList > 0 && (
                <button
                  className={`${styles.nav} ${styles.left}`}
                  onClick={() => handlePrevCard(true)}
                >
                  <TiChevronLeftOutline />
                </button>
              )}
              {renderCards(true)}
              {activeList < filteredCards.length - 1 && (
                <button
                  className={`${styles.nav} ${styles.right}`}
                  onClick={() => handleNextCard(true)}
                >
                  <TiChevronRightOutline />
                </button>
              )}
            </>
          ) : (
            <>
              {activeRandom > 0 && (
                <button
                  className={`${styles.nav} ${styles.left}`}
                  onClick={() => handlePrevCard(false)}
                >
                  <TiChevronLeftOutline />
                </button>
              )}
              {renderCards(false)}
              <button
                className={`${styles.nav} ${styles.right}`}
                onClick={() => handleNextCard(false)}
              >
                <TiChevronRightOutline />
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReactExplained;
