import { useState } from "react";

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3af">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LogoIcon = () => (
  <svg width="32" height="26" viewBox="0 0 36 28" fill="none">
    <rect x="16" y="0" width="2" height="28" fill="white" />
    <polygon points="0,8 16,4 16,14" fill="white" />
    <polygon points="36,10 20,6 20,16" fill="white" stroke="white" strokeWidth="0.5" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const socialButtons = [
    { icon: <TwitterIcon />, bg: "#1DA1F2" },
    { icon: <FacebookIcon />, bg: "#1877F2" },
    { icon: <InstagramIcon />, bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" },
    { icon: <LinkedInIcon />, bg: "#0A66C2" },
    { icon: <PinterestIcon />, bg: "#E60023" },
  ];

  const cols = [
    {
      heading: "Travel Destinations",
      links: ["Europe", "Asia", "North America", "South America", "Australia & New Zealand", "Africa", "Caribbean"],
    },
    {
      heading: "Travel Styles",
      links: ["Personalise", "La Tomatina", "Summer Holidays", "Road Trips", "Europe under 1 Lakh"],
    },
    {
      heading: "Company",
      links: ["Blogs", "For Corporates", "Testimonials", "About Us", "Contact Us"],
    },
    {
      heading: "Terms & Policies",
      links: ["Terms of Service", "Privacy Policy", "COVID-19 Safety", "Subscribe"],
    },
  ];

  return (
    <footer style={{ background: "#1a1a1a", fontFamily: "sans-serif" }}>
     
      <div className="px-20 pt-8 pb-6">
        <div
          className="w-full flex items-center justify-between px-10 py-8 rounded-2xl"
          style={{ background: "#FFE000" }}
        >
          <h3 className="font-bold text-gray-900 leading-snug" style={{ fontSize: "1.5rem", maxWidth: "340px" }}>
            Good Vibes & Great Deals,<br />Straight to You.
          </h3>
          <div className="flex items-center gap-0 rounded-lg overflow-hidden" style={{ minWidth: "360px" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-5 py-3 text-sm text-gray-700 outline-none"
              style={{ background: "white", border: "none", height: "48px" }}
            />
            <button
              className="px-6 text-white text-sm font-semibold"
              style={{ background: "#111", height: "48px", whiteSpace: "nowrap" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="px-20 pt-8 pb-6">
        <div className="flex gap-12">
         
          <div style={{ minWidth: "220px", maxWidth: "240px" }}>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon />
              <span className="text-white font-semibold text-sm" style={{ fontFamily: "Georgia, serif" }}>
                thetarzanway
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              The Tarzan Way designs personalised travel experiences powered by Kaira, our AI travel planner. From discovery to bookings, Kaira helps craft seamless, immersive journeys tailored to you.
            </p>

            <div className="flex items-center gap-2 mb-6">
              {socialButtons.map((s, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </button>
              ))}
            </div>

            <div>
              <p className="text-white font-bold text-sm mb-2">Contact Us</p>
              <div className="flex items-center gap-2 mb-1">
                <WhatsAppIcon />
                <span className="text-gray-400 text-xs">+91 8448687703</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />
                <span className="text-gray-400 text-xs">info@thetarzanway.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-between">
            {cols.map((col, i) => (
              <div key={i}>
                <h4 className="text-white font-bold text-sm mb-4">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-400 text-xs hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

 
      <div className="mx-8 border-t border-gray-700 py-4">
        <p className="text-center text-gray-500 text-xs">
          Copyright © 2018 - 2026 Tarzan Way Travels Private Limited ® - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}