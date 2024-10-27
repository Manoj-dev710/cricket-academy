import map from "@/assets/map.png";
import Image from "next/image";
const Map = () => {
  return (
    <section className="section_top">
      <div className="container">
        <Image src={map} alt="contact" className="mapimg d-block mx-auto" />
      </div>
    </section>
  );
};

export default Map;
