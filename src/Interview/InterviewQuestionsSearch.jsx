import styles from './InterviewQuestionsSearch.module.css'; 

const InterviewQuestionsSearch = ({ searchTerm, setSearchTerm }) => {
    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className={styles.searchInput}
            />
            {searchTerm && (
              <span className={styles.clearIcon} onClick={clearSearch}>
                &times; {/* This is the 'X' symbol */}
              </span>
            )}
          </div>
        </div>
    );
};

export default InterviewQuestionsSearch;
