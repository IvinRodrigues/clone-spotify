import {
  Maximize1,
  Microphone,
  MusicFilter,
  VideoOctagon,
  VolumeHigh,
} from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { OptionsContainer } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { Progress } from "../../../../../../../components/Progress";

function Options() {
  function openInfo() {
    // logic to open
  }

  function openQueue() {
    // logic to open
  }

  function muteVolume() {
    // logic to mute
  }

  function openFullScreen() {
    // logic to redirec
  }

  function redirectToLyrics() {
    // logic to redirec
  }

  return (
    <OptionsContainer>
      <ButtonIcon
        size="medium"
        rounded
        transparent
        data-tooltip-id="player-info-tooltip"
        onClick={openInfo}
      >
        <VideoOctagon />
      </ButtonIcon>
      <Tooltip id="player-info-tooltip" place="top" title="Now playing view" />
      <ButtonIcon
        size="medium"
        rounded
        transparent
        data-tooltip-id="player-lyrics-tooltip"
        onClick={redirectToLyrics}
      >
        <Microphone />
      </ButtonIcon>
      <Tooltip id="player-lyrics-tooltip" place="top" title="Lyrics" />
      <ButtonIcon
        size="medium"
        rounded
        transparent
        data-tooltip-id="player-queue-tooltip"
        onClick={openQueue}
      >
        <MusicFilter />
      </ButtonIcon>
      <Tooltip id="player-queue-tooltip" place="top" title="Queue" />
      <ButtonIcon
        size="medium"
        rounded
        transparent
        data-tooltip-id="player-volume-tooltip"
        onClick={muteVolume}
      >
        <VolumeHigh />
      </ButtonIcon>
      <Tooltip id="player-volume-tooltip" place="top" title="Mute" />
      <Progress size={100} />
      <ButtonIcon
        size="medium"
        rounded
        transparent
        data-tooltip-id="player-full-screen-tooltip"
        onClick={openFullScreen}
      >
        <Maximize1 />
      </ButtonIcon>
      <Tooltip
        id="player-full-screen-tooltip"
        place="top-end"
        title="Full screen"
      />
    </OptionsContainer>
  );
}

export { Options };
