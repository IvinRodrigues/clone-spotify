import { Next, Pause, Previous, RepeateMusic, Shuffle } from "iconsax-react";
import { ButtonIcon } from "../../../../../../../../../components/ButtonIcon";
import { ControlsWrapper, PlayButton } from "./styles";
import { Tooltip } from "../../../../../../../../../components/Tooltip";

function Controls() {
  function shuffleQueue() {
    // logic to shuffle
  }

  return (
    <ControlsWrapper>
      <ButtonIcon
        size="medium"
        rounded={true}
        transparent
        data-tooltip-id="player-shuffle-tooltip"
        onClick={shuffleQueue}
      >
        <Shuffle />
      </ButtonIcon>
      <Tooltip id="player-shuffle-tooltip" place="top" title="Enable suffle" />
      <ButtonIcon
        size="medium"
        rounded={true}
        transparent
        data-tooltip-id="player-previous-tooltip"
        onClick={shuffleQueue}
      >
        <Previous variant="Bold" />
      </ButtonIcon>
      <Tooltip id="player-previous-tooltip" place="top" title="Previous song" />
      <PlayButton data-tooltip-id="player-pause-tooltip" onClick={shuffleQueue}>
        <Pause variant="Bold" />
      </PlayButton>
      <Tooltip
        id="player-pause-tooltip"
        place="top"
        title="Pause current song"
      />
      <ButtonIcon
        size="medium"
        rounded={true}
        transparent
        data-tooltip-id="player-next-tooltip"
        onClick={shuffleQueue}
      >
        <Next variant="Bold" />
      </ButtonIcon>
      <Tooltip id="player-next-tooltip" place="top" title="Next song" />
      <ButtonIcon
        size="medium"
        rounded={true}
        transparent
        data-tooltip-id="player-loop-tooltip"
        onClick={shuffleQueue}
      >
        <RepeateMusic />
      </ButtonIcon>
      <Tooltip id="player-loop-tooltip" place="top" title="Enable lopp" />
    </ControlsWrapper>
  );
}

export { Controls };
