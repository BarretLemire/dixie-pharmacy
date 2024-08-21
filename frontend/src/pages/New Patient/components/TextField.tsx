import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TrailingIcon from "./TrailingIcon";
import "./TextField.css";
import React from "react";

export type TextFieldType = {
  className?: string;
  supportingText?: string;
  showSupportingText?: boolean;
  icon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const TextField: FunctionComponent<TextFieldType> = ({
  className = "",
  supportingText = "Group#",
  showSupportingText = true,
  propMinWidth,
  icon,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`text-field ${className}`}>
      <div className="text-field1">
        <div className="state-layer1">
          <div className="content" style={contentStyle}>
            <div className="label-text">
              <div className="label-text1" />
            </div>
            <div className="input-text">
              <div className="input-text1" />
            </div>
          </div>
          <TrailingIcon icon={icon} />
        </div>
      </div>
      <div className="active-indicator" />
      {showSupportingText && (
        <div className="supporting-text">
          <div className="supporting-text1">{supportingText}</div>
        </div>
      )}
    </div>
  );
};

export default TextField;
