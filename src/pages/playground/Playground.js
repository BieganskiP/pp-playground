import { useParams } from "react-router-dom";
import BackToHome from "../baseComponents/backToHome/BackToHome";

import StackingCards from "../components/stackingCards/StackingCards";
import SlidingGrid from "../components/slidingGrid/SlidingGrid";
import CircleButton from "../components/circleButton/CircleButton";

import css from "./Playground.module.css";

export default function Playground() {
  const { component } = useParams();

  switch (component) {
    case "stackingCards":
      return (
        <div className={css.wrapper}>
          <BackToHome />
          <StackingCards />
        </div>
      );
    case "slidingGrid":
      return (
        <div className={css.wrapper}>
          <BackToHome />
          <SlidingGrid />
        </div>
      );
    case "circleButton":
      return (
        <div className={css.wrapper}>
          <BackToHome />
          <CircleButton />
        </div>
      );
    default:
      return (
        <div className={css.wrapper}>
          <BackToHome />
          Component not found
        </div>
      );
  }
}
