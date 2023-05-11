import React from "react";
import ReactCurvedText from "react-curved-text";

import css from "./CircleButton.module.css";

export default function CircleButton() {
  return (
    <div className={css.circle}>
      <div className={css.inner}></div>
      <div className={css.text}>
        <ReactCurvedText
          width={150}
          height={150}
          cx={75}
          cy={75}
          rx={75}
          ry={75}
          startOffset={50}
          reversed={false}
          text="Menu"
          textProps={{ style: { fontSize: 24 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
    </div>
  );
}
