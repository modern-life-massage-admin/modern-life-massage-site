import * as React from "react";

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
        <div className="reviews__review">
          <span>&ldquo;</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis, leo vitae varius lobortis, mauris mauris varius dui, vitae
            iaculis est quam aliquet mi.{" "}
          </p>
          <h4>Julie Wilson</h4>
          <a href="#">Google Reviews</a>
        </div>
        <div className="reviews__review">
          <span>&ldquo;</span>
          <p>
            Integer sodales odio vitae nisi lobortis, eu ullamcorper ante
            mattis. Sed vulputate, elit quis molestie porta, nulla odio pharetra
            felis, eu pellentesque arcu erat sit amet eros. Maecenas finibus
            bibendum eleifend. Nulla in tortor quis ipsum egestas scelerisque.
            In suscipit sodales arcu non tristique.
          </p>
          <h4>Todd Simons</h4>
          <a href="#">Yelp</a>
        </div>
      </div>
      <div>
        <div className="reviews__review">
          <span>&ldquo;</span>
          <p>
            Integer sodales odio vitae nisi lobortis, eu ullamcorper ante
            mattis. Sed vulputate, elit quis molestie porta, nulla odio pharetra
            felis, eu pellentesque arcu erat sit amet eros. Maecenas finibus
            bibendum eleifend. Nulla in tortor quis ipsum egestas scelerisque.
            In suscipit sodales arcu non tristique.
          </p>
          <h4>Todd Simons</h4>
          <a href="#">Yelp</a>
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;
