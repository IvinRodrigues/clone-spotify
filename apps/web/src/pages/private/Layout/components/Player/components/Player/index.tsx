import { Progress } from "../../../../../../../components/Progress";
import { Controls } from "./components/Controls";
import { Player as PlayerControl } from "./components/Player";
import { PlayerContainer } from "./styles";

function Player() {
  return (
    <PlayerContainer>
      <Controls />
      <PlayerControl />
    </PlayerContainer>
  );
}

export { Player };
