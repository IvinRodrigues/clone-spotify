import {
  ArrowLeft2,
  ArrowRight2,
  Notification,
  Profile2User,
} from "iconsax-react";
import { ButtonIcon } from "../../../../../../../components/ButtonIcon";
import { HeaderContainer, Items, Navbar } from "./styles";
import { Tooltip } from "../../../../../../../components/Tooltip";
import { useNavigate } from "react-router-dom";
import { useOutletAnimation } from "../../../../../../../hooks/useOutletAnimation";

function Header() {
  const navigate = useNavigate();
  const { toggleVisibility } = useOutletAnimation();

  function goBack() {
    console.log(window.history);
    toggleVisibility();
    setTimeout(() => {
      navigate("/");
    }, 400);
  }

  return (
    <HeaderContainer id="mainHeader">
      <Navbar>
        <Items>
          <ButtonIcon
            size="medium"
            rounded
            data-tooltip-id="main-header-back-tooltip"
            onClick={goBack}
          >
            <ArrowLeft2 />
          </ButtonIcon>
          <Tooltip id="main-header-back-tooltip" place="top" title="Go back" />
          <ButtonIcon
            size="medium"
            rounded
            data-tooltip-id="main-header-forward-tooltip"
          >
            <ArrowRight2 />
          </ButtonIcon>
          <Tooltip
            id="main-header-forward-tooltip"
            place="top"
            title="Go forward"
          />
        </Items>
        <Items>
          <ButtonIcon
            size="medium"
            rounded
            data-tooltip-id="main-header-new-tooltip"
          >
            <Notification />
          </ButtonIcon>
          <Tooltip
            id="main-header-new-tooltip"
            place="top"
            title="What's new"
          />
          <ButtonIcon
            size="medium"
            rounded
            data-tooltip-id="main-header-activity-tooltip"
          >
            <Profile2User />
          </ButtonIcon>
          <Tooltip
            id="main-header-activity-tooltip"
            place="top"
            title="Frined activity"
          />
          <ButtonIcon
            size="medium"
            rounded
            data-tooltip-id="main-header-profile-tooltip"
          >
            <Profile2User />
          </ButtonIcon>
          <Tooltip
            id="main-header-profile-tooltip"
            place="top"
            title="Profile"
          />
        </Items>
      </Navbar>
    </HeaderContainer>
  );
}

export { Header };
