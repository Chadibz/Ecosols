const img3 = new URL("../../../../public/assets/5-.png", import.meta.url);

export default function Opération_maintenance() {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <img className="cards-img3" src={img3}></img>
        <h4 className="card-title">Opération et maintenance</h4>
        <p className="card-text text-secondary">c'est un bon article</p>
      </div>
    </div>
  );
}
