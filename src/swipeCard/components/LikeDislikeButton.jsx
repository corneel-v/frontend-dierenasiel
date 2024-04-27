import CatPaw from "../../globalComponents/CatPaw";

export default function LikeDislikeButton({ paw, color }) {
  console.log(paw === "cat");

  return (
    <div
      style={{
        width: 57,
        height: 57,
        borderRadius: "50%",
        outline: `4px solid ${color}`,
        display: "flex",
      }}
    >
      <div
        style={{
          width: 47,
          height: 47,
          margin: "auto",
        }}
      >
        {<CatPaw color={color} />}
      </div>
    </div>
  );
}
