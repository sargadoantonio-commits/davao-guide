import InfoCard from "../../components/InfoCard";
import HeroArt from "../../components/HeroArt";

export default function Tips() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Before you go</p>
        <h2>Visitor tips.</h2>
        <p>Simple advice to help you plan a better trip.</p>
        <HeroArt />
      </section>

      <section className="grid">
        <InfoCard
          title="Best Time to Visit"
          description="Dry months are generally better for beaches and hiking. Check the weather before going."
        />
        <InfoCard
          title="Getting Around"
          description="Use taxis, ride-hailing apps, or jeepneys in the city. For Samal, take a ferry from Davao City or Sasa."
        />
        <InfoCard
          title="What to Bring"
          description="Bring sunscreen, a hat, a refillable water bottle, cash, and comfortable shoes."
        />
      </section>
    </>
  );
}