import * as React from "react";

import HomePageData from "../../../content/homepage.json";

const Reviews = () => (
  <section className="reviews">
    <div className="reviews__heading">
      <h2>Reviews</h2>

      <div className="reviews__ornament-1">
        <svg
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#fff"
            stroke-opacity=".4"
            stroke-width="4"
            stroke-dasharray="8 8"
          />
        </svg>
      </div>
      <div className="reviews__ornament-2">
        <svg
          width="43"
          height="43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21.213"
            cy="21.213"
            r="14.5"
            transform="rotate(-45 21.213 21.213)"
            stroke="#fff"
            stroke-opacity=".4"
            stroke-dasharray="8 8"
          />
        </svg>
      </div>
    </div>
    <div className="reviews__main">
      <div>
        {HomePageData.reviews.map(({ text, author, source, link }, index) => {
          if (index % 2 == 0) return;
          return (
            <div className="reviews__review">
              <span>&ldquo;</span>
              <p>{text}</p>
              <h4>{author}</h4>
              <a href={link}>{source}</a>
            </div>
          );
        })}
      </div>
      <div>
        {HomePageData.reviews.map(({ text, author, source, link }, index) => {
          if (index % 2 == 1) return;
          return (
            <div className="reviews__review">
              <span>&ldquo;</span>
              <p>{text}</p>
              <h4>{author}</h4>
              <a href={link}>{source}</a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Reviews;
