import InfoCard from "../components/InfoCard";
import HeroArt from "../components/HeroArt";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Davao Region, Philippines</p>
        <h2>Where to go in Davao.</h2>
        <p>Nature, wildlife, and island getaways for tourists and locals planning their next visit.</p>
        <HeroArt />
      </section>

      <section className="grid">
        <InfoCard
          title="Philippine Eagle Center"
          location="Malagos, Davao City"
          description="Home to the critically endangered Philippine Eagle, the country's national bird, along with other native wildlife."
        />
        <InfoCard
          title="Eden Nature Park"
          location="Toril, Davao City"
          description="A mountain resort with pine trees, gardens, and cool weather, great for a relaxing day trip."
        />
        <InfoCard
          title="Island Garden City of Samal"
          location="Davao del Norte"
          description="Island known for white sand beaches, resorts, and caves, reachable by a short ferry ride."
        />
        <InfoCard
          title="Mount Apo"
          location="Davao del Sur / Cotabato"
          description="The highest mountain in the Philippines, a popular destination for hikers and nature lovers."
        />
        <InfoCard
          title="People's Park"
          location="Davao City"
          description="A public park in the city with sculptures, gardens, and open spaces for families."
        />
        <InfoCard
          title="Davao Crocodile Park"
          location="Ma-a, Davao City"
          description="A wildlife park featuring crocodiles, animal shows, and other attractions."
        />
      </section>
    </>
  );
}