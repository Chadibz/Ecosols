const img1 = new URL("../../../../public/assets/CO2.png", import.meta.url);
import CountUp from "react-countup";
export default function Co2Progress() {
  return (
    <div className=" cardP container-fluid d-flex justify-content-center">
      <div className="row rowC ">
            <div className="col">
                <img className="cardP-img1" src={img1}></img>
            </div>
             <div className="count col">
                <CountUp end={100} duration={2}/>
            </div>
            <div>
            <h4 className="cardP-title"> indicateur carbone CO2</h4>
            </div>
    </div>

    </div>
  );
}