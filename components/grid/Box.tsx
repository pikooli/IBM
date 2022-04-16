import React from "react";
import boxServices from "services/boxServices/";

type Props = { value: number };

// Render a box with the corresponding color
const Box: React.FC<Props> = ({ value }) => {
  if (value == null) {
    return <></>;
  }

  const color = boxServices.pickColor(value);

  return (
    <div
      className={`px-auto py-3 border rounded text-center`}
      style={color ? { backgroundColor: color } : {}}
    >
      {value}
    </div>
  );
};

export default Box;
