import { useContext } from "react";
import { OutletAnimationContext } from "../contexts/outletAnimationContext";

function useOutletAnimation() {
  return useContext(OutletAnimationContext);
}

export { useOutletAnimation };
