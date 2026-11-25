export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 400 240" aria-hidden="true">
      <circle cx="290" cy="80" r="38" fill="#c8553d" />
      <polygon points="120,240 230,90 300,170 340,120 400,200 400,240" fill="#2d6b52" />
      <polygon points="0,240 90,130 150,190 210,110 300,240" fill="#153827" />
      <path d="M0 225 Q50 212 100 225 T200 225 T300 225 T400 225 V240 H0Z" fill="#f3ece0" opacity="0.15" />
    </svg>
  );
}