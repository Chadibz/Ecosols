export default function Blog({title,img,secondText}) {
  return (
    <div className="cardBlog text-center">
      <div className="card-body text-dark">
        <img className="cardse-img1" src={img}></img>

        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{secondText}</p>
        <div className="lire"></div>
      </div>
    </div>
  );
}
