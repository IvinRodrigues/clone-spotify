import { useTheme } from "styled-components";
import { Typography } from "../../../../../../../components/Typography";
import { SectionPanel, SectionPanelHeader } from "../../styles";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { Musicnote } from "iconsax-react";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { QueueInfo, QueuePreview } from "./styles";

function Queue() {
  const theme = useTheme();

  function openQueue() {
    // logic to open queue
  }

  function redirectToAlbum() {
    // logic to redirect
  }

  function redirectToArtist() {
    // logic to redirect
  }

  function playNextSongInQueue() {
    // logic to play
  }

  return (
    <SectionPanel>
      <SectionPanelHeader>
        <Typography variant="title" size={14}>
          Next on queue
        </Typography>
        <Typography
          variant="link"
          size={14}
          color={theme.text.subdued}
          onClick={openQueue}
        >
          Open queue
        </Typography>
      </SectionPanelHeader>
      <QueuePreview>
        <ButtonIcon
          size="medium"
          data-tooltip-id="play-next-tooltip"
          onClick={playNextSongInQueue}
        >
          <Musicnote />
        </ButtonIcon>
        <Tooltip
          id="play-next-tooltip"
          place="top-start"
          title="Play Music name by Artist name"
        />
        <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg" />
        <QueueInfo>
          <Typography
            variant="subtitle"
            size={16}
            link
            onClick={redirectToAlbum}
          >
            Music name
          </Typography>
          <Typography
            variant="text"
            size={12}
            color={theme.text.subdued}
            link
            onClick={redirectToArtist}
          >
            Artist name
          </Typography>
        </QueueInfo>
      </QueuePreview>
    </SectionPanel>
  );
}

export { Queue };
