import LikeDislikeButton from "./LikeDislikeButton";

export default function ButtonGroup({ paw }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        transform: "translateY(-60px)",
        width: "50vw",
        margin: "auto",
      }}
    >
      <LikeDislikeButton paw={paw} color="#71D358" />
      <LikeDislikeButton paw={paw} color="#C1121F" />
    </div>
  );
}
