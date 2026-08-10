import React from 'react';
import './Reviews.css';

const Reviews = ({ product }) => {
  return (
    <div className="container reviews section">
      <h2>Avaliações</h2>

      <ul className="reviews-list">
        {product.reviews.map((review, index) => (
          <li key={index} className="review">
            <div className="review-data">
              <div className="review-data-left">
                <div>{review.reviewerName.charAt(0)}</div>

                <div>
                  <strong>{review.reviewerName}</strong>
                  <span>{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>

              <span>★ {review.rating.toFixed(1)}</span>
            </div>

            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
