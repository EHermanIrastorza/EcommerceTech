import CardConteiner from "@/components/cardConteiner/CardConteiner";
import ImageCarousel from "@/components/carousel/imagenCarousel";
import React from "react";

const HomeView: React.FC = () => {
  return (
    <div>
      <div>
        <ImageCarousel />
      </div>

      <div>
        <CardConteiner />
      </div>
    </div>
  );
};

export default HomeView;
