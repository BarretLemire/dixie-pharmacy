import { FunctionComponent } from "react";
import "./AssistiveChip.css";
import React from "react";

export type AssistiveChipType = {
  className?: string;
};

const AssistiveChip: FunctionComponent<AssistiveChipType> = ({
  className = "",
}) => {
  return (
    <textarea
      className={`assistive-chip ${className}`}
      placeholder="Perscriptions"
      rows={4}
      cols={11}
    />
  );
};

export default AssistiveChip;
