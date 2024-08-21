import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TrailingIcon.css";
import React from "react";

export type TrailingIconType = {
  className?: string;
  icon?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propMarginRight?: CSSProperties["marginRight"];
};

const TrailingIcon: FunctionComponent<TrailingIconType> = ({
  className = "",
  icon,
  propMarginTop,
  propMarginRight,
}) => {
  const trailingIconStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
      marginRight: propMarginRight,
    };
  }, [propMarginTop, propMarginRight]);

  return (
    <div className={`trailing-icon ${className}`} style={trailingIconStyle}>
      <div className="container">
        <div className="state-layer">
          <img className="icon" loading="lazy" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TrailingIcon;
