import { ReactSVG } from "react-svg";

export default function DogPaw({ color }) {
  return (
    <div>
      <ReactSVG
        src="/src/assets/paws/dog-paw.svg"
        width={30}
        beforeInjection={(svg) => {
          svg.setAttribute("style", `fill: ${color}`);
        }}
      />
    </div>
  );
}
