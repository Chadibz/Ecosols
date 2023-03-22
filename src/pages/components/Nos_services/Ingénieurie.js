const img2 = new URL("../../../../public/assets/3-.png", import.meta.url);

export default function Ingénieurie() {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <img className="cards-img" src={img2}></img>
        <h4 className="card-title">Ingénieurie</h4>
        <p className="card-text text-secondary">c'est un bon article</p>
      </div>
    </div>
  );
}
