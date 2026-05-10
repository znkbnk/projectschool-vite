import React from "react";
import styles from "./BlogCard.module.css"; // Now uses the new styles below
import BlogCard from "./BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const BlogCardList = () => {
  const posts = [
    {
      heading: "Dev Essentials: Core Guides & Tools",
      description:
        "Your ultimate resource for comprehensive guides on vital development tools and techniques. These in-depth resources provide clear, step-by-step insights to enhance your projects and sharpen your skills. Perfect for developers of all levels seeking to boost productivity and elevate the quality of their work.",
      link: "/blogs/devessentials",
      img: "/images/DevEssentials.webp",
    },
    {
      heading: "React FAQs: Essential Questions Answered",
      description:
        "Get clear, concise answers to some of the most frequently asked questions about React. Explore topics like the differences between React and React Native, the async nature of hooks, and the current demand for React developers. This collection provides quick insights for developers of all experience levels, helping you deepen your understanding and make informed decisions in your React journey.",
      link: "/blogs/reactexplained",
      img: "/images/ReactFAQ.webp",
    },
  ];

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />

      <div className='header'>
        <h1 className='component-title'>React Articles & Tutorials</h1>
        <p className='header-subtitle'>
          In-depth guides on development tools and answers to common React
          questions.
        </p>
      </div>

      <div className={styles.wrapper}>
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogCardList;
