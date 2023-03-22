const img3 = new URL("../../../../public/assets/PROJ.png", import.meta.url);
import CountUp from "react-countup";
export default function ProjectProgress() {
    return (
        <div className=" cardP container-fluid d-flex justify-content-center">
        <div className="row rowC ">
              <div className="col">
                  <img className="cardP-img3" src={img3}></img>
              </div>
               <div className="count col">
                  <CountUp end={10} duration={2}/>
              </div>
              <div>
              <h4 className="cardP-title">nombre des projets</h4>
              </div>
      </div>
  
      </div>
    );
  }