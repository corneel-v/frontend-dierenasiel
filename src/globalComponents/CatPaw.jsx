import { ReactSVG } from "react-svg";

export default function CatPaw({ color, width }) {
  return (
    <div>
      <ReactSVG
        src="/src/assets/paws/paw.svg"
        width={30}
        beforeInjection={(svg) => {
          svg.setAttribute("style", `fill: ${color}`);
        }}
      />
    </div>
  );
}
