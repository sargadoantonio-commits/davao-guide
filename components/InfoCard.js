export default function InfoCard({ title, description, location }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {location && <span className="tag">{location}</span>}
      <p>{description}</p>
    </div>
  );
}