import { ReactSVG } from "react-svg";

export default function HumanHand({ color }) {
  return (
    <div>
      <ReactSVG
        src="/src/assets/paws/human-hand.svg"
        width={30}
        beforeInjection={(svg) => {
          svg.setAttribute("style", `fill: ${color}`);
        }}
      />
    </div>
  );
}
