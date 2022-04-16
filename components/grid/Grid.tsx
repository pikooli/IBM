import React from "react";
import boxService from "services/boxServices/";

type Props = { size: number };

// Render the grid of boxes
const Grid: React.FC<Props> = ({ size }) => {
  if (size == null) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">{boxService.createBoxes(size)}</div>
  );
};

export default Grid;
