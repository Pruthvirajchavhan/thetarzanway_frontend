export default function WhyDifferent() {
  const points = [
    "100% customized plans, no pre-set packages.",
    "Stays & experiences that match your style — whether it's budget hostels or boutique villas.",
    "Trusted local partners & verified vendors.",
    "Emergency support and WhatsApp assistance on-ground.",
    "Sustainable, responsible travel — no animal shows, no tourist traps.",
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-[1500px] mx-auto flex items-center gap-16">
       
        <div className="flex-1 min-w-0">
          <h2
            className="text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Why This Thailand Is Different?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            From hidden islands to vibrant street markets, we craft seamless Thai journeys that
            blend culture, comfort, and adventure—exactly the way you like it.
          </p>

          <ul className="space-y-5">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
        
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#F5A623" }}
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0" style={{ width: "540px" }}>
          <img
            src="https://d31aoa0ehgvjdi.cloudfront.net/eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNzcwODk0Njg4NDcyOTk1OTk2NDc1MjE5NzI2NTYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="
            alt="Songkran water festival celebration"
            className="w-full rounded-xl object-cover"
            style={{ height: "520px" }}
          />
        </div>
      </div>
    </div>
  );
}