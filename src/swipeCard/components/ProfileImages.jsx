import { Carousel } from "antd";
export default function ProfileImages({ animalName, amountOfImages }) {
  const images = [...Array(amountOfImages).keys()].map((i) => i + 1);

  return (
    <div style={{ width: "342px", height: 414, margin: "auto" }}>
      <Carousel dotPosition="top">
        {images.map((i) => {
          return (
            <div key={i} style={{ borderRadius: 25 }}>
              <img
                style={{ borderRadius: 25 }}
                key={i}
                src={`/src/assets/dieren/${animalName}${i}.png`}
                alt="img"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
