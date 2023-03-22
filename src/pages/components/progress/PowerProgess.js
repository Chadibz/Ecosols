const img2 = new URL("../../../../public/assets/puissance.png", import.meta.url);
import CountUp from "react-countup";
export default function PowerProgess() {
    return (
        <div className=" cardP container-fluid d-flex justify-content-center">
        <div className="row rowC ">
              <div className="col">
                  <img className="cardP-img2" src={img2}></img>
              </div>
               <div className="count col">
                  <CountUp end={170} duration={2}/>
              </div>
              <div>
              <h4 className="cardP-title"> puissance installé en kwc</h4>
              </div>
      </div>
  
      </div>
    );
  }