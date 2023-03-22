import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const img1 = new URL("./IMG0.png", import.meta.url);


function MyCarousel() {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  return (
    <Carousel className="carousel" breakPoints={breakPoints} autoPlay>
      <div>
        <img src={img1} alt="tahche"></img>
      </div>

    </Carousel>
  );
}
export default MyCarousel;
