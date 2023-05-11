import { Link } from "react-router-dom";

import css from "./BackToHome.module.css";

export default function BackToHome() {
  return (
    <Link className={css.button} to="/">
      Home
    </Link>
  );
}
