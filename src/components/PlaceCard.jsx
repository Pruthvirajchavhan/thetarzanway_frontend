import { useState } from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill={star <= Math.floor(rating) ? "#F59E0B" : star - 0.5 <= rating ? "url(#half)" : "none"}
          stroke="#F59E0B"
          strokeWidth="1.5"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-amber-500">{rating}</span>
    </div>
  );
};

export default function PlaceCard() {
  return (
    <div
      className="p-8"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .place-card {
          font-family: 'DM Sans', sans-serif;
          width: 340px;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
        }

        .place-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.13), 0 6px 16px rgba(0,0,0,0.07);
        }

        .card-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .place-card:hover .card-image-wrapper img {
          transform: scale(1.07);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%);
        }

        .badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #ffffff;
          color: #e05c7a;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
        }

        .place-name {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.25;
          margin-bottom: 8px;
        }

        .description {
          color: #7a7a8c;
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .divider {
          height: 1px;
          background: #f0f0f5;
          margin-bottom: 16px;
        }

        .location-row {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #a0a0b0;
          font-size: 12px;
          margin-bottom: 14px;
        }

        .view-btn {
          width: 100%;
          padding: 13px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f5576c, #f093fb);
          border: none;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .view-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .view-btn:hover::before {
          opacity: 1;
        }

        .view-btn span {
          position: relative;
          z-index: 1;
        }

        .view-btn:hover {
          box-shadow: 0 10px 28px rgba(245, 87, 108, 0.35);
          transform: translateY(-1px);
        }

        .reviews-text {
          font-size: 12px;
          color: #b0b0c0;
        }
      `}</style>
      <div>
        
      </div>
      

      <div className="place-card">
       
        <div className="card-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80"
            alt="Bali Temples"
          />
          <div className="image-overlay" />
          <div className="badge">✦ Featured</div>
        </div>

      
        <div style={{ padding: "22px" }}>
          <div className="place-name">Ubud Sacred Temples</div>

          <div className="location-row">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Ubud, Bali, Indonesia
          </div>

          <p className="description">
            Wander through ancient moss-covered shrines nestled in Bali's emerald jungle. A spiritual escape where rice paddies meet sacred ritual.
          </p>

          <div className="divider" />

          <div className="flex items-center justify-between mb-5">
            <StarRating rating={4.8} />
            <span className="reviews-text">2,341 reviews</span>
          </div>

          <button className="view-btn">
            <span>View Details →</span>
          </button>
        </div>
      </div>
    </div>
  );
}