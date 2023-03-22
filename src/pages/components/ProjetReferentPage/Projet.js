const img5 = new URL("./blog123.png", import.meta.url);
import { items } from "./items";
export default function Projet() {
  return ( 
    <div>
    {items.map((item,index)=>{return(
    <div key={index} className="proj container-fluid d-flex justify-content-center ">
       
        <div className="row justify-content-center">
          <div  className=" col-sm-12 col-md-6">
          <img className="cards-blog1" src={img5}></img>
            
          </div>
          <div className=" col-sm-12 col-md-6">
          <h4 className="proj-title">
            {item.title}
          </h4>
          <p className="proj-text text-secondary">
             {item.desc}
            </p>     
            <button className="project-button">lire la suite</button>
             </div>
        </div>
        </div>

        )})
                
      }
      </div>
  );
}
