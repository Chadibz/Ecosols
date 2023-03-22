const imgg = new URL("../../../../public/assets/2-.png", import.meta.url);

export default function Execution_pilotage() {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <img className="cards-img" src={imgg}></img>
        <h4 className="card-title">Execution et pilotage</h4>
        <p className="card-text text-secondary">c'est un bon article</p>
      </div>
    </div>
  );
}
