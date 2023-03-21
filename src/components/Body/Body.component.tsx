import { Section1 } from "../Section1/Section1.component";
import { Section2 } from "../Section2/Section2.component";
import "./Body.styles.scss";

interface Props {
  pkmName: string;
}
export default function Body({ pkmName }: Props) {
  console.log("Nome: ", pkmName);
  return (
    <>
      <div className="body">
        <Section1 pkmName={pkmName} />
        <Section2 />
      </div>
    </>
  );
}
