import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

// Memoize to prevent unnecessary re-renders
const BlogCard = memo(({ heading, description, link, img }) => (
  <div className={styles.blogCard}>
    <div className={styles.blogCardBody}>
      <img src={img} className={styles.blogCardImage} alt={heading} />
      <h2 className={styles.blogCardTitle}>{heading}</h2>
      <p className={styles.blogCardDescription}>{description}</p>
      <Link to={link} className={styles.blogCardBtn}>
        Read more
      </Link>
    </div>
  </div>
));

export default BlogCard;