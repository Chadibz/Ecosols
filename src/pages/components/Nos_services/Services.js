import Article from "./Ingénieurie";
import Conseil from "./Conseil";
import Ingénieurie from "./Ingénieurie";
import Opération_maintenance from "./Opération_maintenance";
import Execution_pilotage from "./Execution_pilotage";
export default function Services() {
  return (
    <div>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
      <div className="col ">
          <Opération_maintenance />
        </div>
        <div className="col ">
          <Ingénieurie />
        </div>
        
        <div className="col ">
          <Conseil />
        </div>
      
        <div className="col ">
          <Execution_pilotage />
        </div>
      </div>
    </div>
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        <button className="service-button">view all services</button>
        </div>
    </div>
    </div>
  );
}
