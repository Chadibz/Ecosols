const img1 = new URL("../../../../public/assets/4-.png", import.meta.url);
export default function Conseil() {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <img className="cards-img1" src={img1}></img>

        <h4 className="card-title">Conseil</h4>
        <p className="card-text text-secondary">kjbzefkjbz</p>
        <div className="lire"></div>
      </div>
    </div>
  );
}
