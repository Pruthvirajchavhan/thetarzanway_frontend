import { useState } from "react";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    title: "Authentic Thai Cooking Class",
    desc: "Discover the secrets of Thai flavors as you craft five iconic dishes with expert guidance in Koh Samui.",
    price: "₹5,195/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    title: "Bangkok: Green Rooftop Farming Experience",
    desc: "Learn sustainable farming techniques and transform food waste into organic treasures atop Bangkok's vibrant skyline.",
    price: "₹4,342/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=700&q=80",
    title: "Koh Larn Pirate Adventure & Beach Escape",
    desc: "Sail the Caribbean waters aboard a pirate ship, discovering hidden beaches, snorkeling, and thrilling ocean escapades.",
    price: "₹5,760/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80",
    title: "Chiang Mai Nighttime Temples & Food Escape",
    desc: "Discover the enchanting glow of temples and savor street food delights on this lively night tuk-tuk tour.",
    price: "₹13,025/-",
    rating: 5,
    reviews: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=80",
    title: "Phuket Island Hopping Adventure",
    desc: "Explore the stunning turquoise waters and pristine beaches of Phuket's most beautiful surrounding islands.",
    price: "₹6,890/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=700&q=80",
    title: "Floating Market & Canal Tour",
    desc: "Glide through Bangkok's iconic floating markets and ancient canals on a traditional longtail boat.",
    price: "₹3,199/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    title: "Authentic Thai Cooking Class",
    desc: "Discover the secrets of Thai flavors as you craft five iconic dishes with expert guidance in Koh Samui.",
    price: "₹5,195/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    title: "Bangkok: Green Rooftop Farming Experience",
    desc: "Learn sustainable farming techniques and transform food waste into organic treasures atop Bangkok's vibrant skyline.",
    price: "₹4,342/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=700&q=80",
    title: "Koh Larn Pirate Adventure & Beach Escape",
    desc: "Sail the Caribbean waters aboard a pirate ship, discovering hidden beaches, snorkeling, and thrilling ocean escapades.",
    price: "₹5,760/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80",
    title: "Chiang Mai Nighttime Temples & Food Escape",
    desc: "Discover the enchanting glow of temples and savor street food delights on this lively night tuk-tuk tour.",
    price: "₹13,025/-",
    rating: 5,
    reviews: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&q=80",
    title: "Phuket Island Hopping Adventure",
    desc: "Explore the stunning turquoise waters and pristine beaches of Phuket's most beautiful surrounding islands.",
    price: "₹6,890/-",
    rating: null,
    reviews: null,
  },
  {
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=700&q=80",
    title: "Floating Market & Canal Tour",
    desc: "Glide through Bangkok's iconic floating markets and ancient canals on a traditional longtail boat.",
    price: "₹3,199/-",
    rating: null,
    reviews: null,
  }
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#F5C518" : "#ddd"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function BestPicks() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(cards.length - visible, i + 1));

  const visibleCards = cards.slice(startIndex, startIndex + visible);

  return (
    <div className="w-full bg-white py-10 px-6">
      <div className="max-w-screen-2xl mx-auto">

        <div className="flex justify-center mb-14">
          <button className="min-w-fit border border-black rounded px-6 py-4 text-lg font-medium text-black hover:bg-black hover:text-white transition-colors">
                    + Plan Itinerary For free
                </button>
        </div>

        <h2
          className="text-center text-4xl font-bold text-gray-900 mb-14"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our Thailand's Best Picks For You!
        </h2>

        <div className="relative flex items-center">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute -left-5 z-10 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition-colors disabled:opacity-30"
            style={{ top: "35%" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          
          <div className="grid grid-cols-4 gap-7 w-full">
            {visibleCards.map((card, i) => (
              <div key={startIndex + i} className="flex flex-col">
           
                <div className="relative rounded-xl overflow-hidden mb-3" style={{ height: "220px" }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    <ArrowIcon />
                  </button>
                </div>

        
                <h3 className="font-bold text-gray-900 text-lg mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-1 flex-1">
                  {card.desc}
                </p>

                
                {card.rating && (
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} filled={j < card.rating} />
                    ))}
                    <span className="text-gray-500 text-xs ml-1">{card.reviews} ({card.reviews})</span>
                  </div>
                )}

        
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-gray-900 text-lg">{card.price}</span>
                  <span className="text-gray-400 text-lg">per person</span>
                </div>
              </div>
            ))}
          </div>

        
          <button
            onClick={next}
            disabled={startIndex >= cards.length - visible}
            className="absolute -right-5 z-10 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition-colors disabled:opacity-30"
            style={{ top: "35%" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}