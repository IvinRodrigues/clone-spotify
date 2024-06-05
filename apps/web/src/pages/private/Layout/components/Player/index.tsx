import { Overview } from "./components/Overview";
import { PlayerContainer } from "./styles";
import { Player as PlayerContent } from "./components/Player";
import { Options } from "./components/Options";

function Player() {
  return (
    <PlayerContainer>
      <Overview />
      <PlayerContent />
      <Options />
    </PlayerContainer>
  );
}

export { Player };
