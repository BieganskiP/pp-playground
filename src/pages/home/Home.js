import { Link } from "react-router-dom";

import css from "./Home.module.css";

export default function Home() {
  const components = [
    { name: "Stacking Cards", path: "stackingCards" },
    { name: "Sliding Grid", path: "slidingGrid" },
    { name: "Circle Button", path: "circleButton" },
  ];
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Welcome to playground</h1>
      <ul className={css.list}>
        {components.map((component) => (
          <li key={component.name} className={css.link}>
            <Link to={`/playground/${component.path}`}>{component.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
