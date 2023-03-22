import Co2Progress from "./Co2Progress";
import PowerProgess from "./powerProgess";
import ProjectProgress from "./projectProgress";
export default function Progress() {
    return (
      <div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <h1 className="col title" >Offrir de meilleurs résultats à nos clients</h1>
          </div>
        </div>

          <div className="container-fluid d-flex justify-content-center">
          <div className="row">
          <div className="col ">
              <Co2Progress/>
            </div>
            <div className="col ">
              <PowerProgess/>
            </div>
            
            <div className="col ">
              <ProjectProgress/>
            </div>
          </div>
        </div>
        </div>
    );
  }