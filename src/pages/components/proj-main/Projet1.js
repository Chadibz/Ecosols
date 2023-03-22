const img5 = new URL("./blog12.png", import.meta.url);
export default function Projet1() {
  return (
    <div className="proj container-fluid d-flex justify-content-center ">
      
        <div className="row justify-content-center">
          <div className=" col-sm-12 col-md-6">
          <img className="cards-blog1" src={img5}></img>
            
          </div>
          <div className=" col-sm-12 col-md-6">
          <h4 className="proj-title">
            Pompage solaire 29,700 kwc MEJEL BEL-AABBES KASSERINE.
          </h4>
          <p className="proj-text text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>     
            <button className="project-button">read more</button>
             </div>
        </div>
      </div>
  );
}
