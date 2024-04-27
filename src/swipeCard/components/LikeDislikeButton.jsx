import CatPaw from "../../globalComponents/CatPaw";
import DogPaw from "../../globalComponents/DogPaw";
import HumanHand from "../../globalComponents/HumanHand";

export default function LikeDislikeButton({ paw, color, handleClick }) {
  return (
    <div
      style={{
        width: 57,
        height: 57,
        borderRadius: "50%",
        outline: `4px solid ${color}`,
        display: "flex",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: 47,
          height: 47,
          margin: "auto",
        }}
      >
        {paw === "Cat" && <CatPaw color={color} />}
        {paw === "Dog" && <DogPaw color={color} />}
        {paw === "Human" && <HumanHand color={color} />}
      </div>
    </div>
  );
}
