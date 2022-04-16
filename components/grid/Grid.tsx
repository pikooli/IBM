import React, { useState } from "react";
import boxService from "services/boxServices/";
import Form from "components/grid/Form";

type Props = {};

// Render the grid of boxes
const Grid: React.FC<Props> = () => {
  const [size, setSize] = useState(100);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget.size.value;
    setSize(value);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <div className="grid grid-cols-3 gap-4">
        {boxService.createBoxes(size)}
      </div>
    </div>
  );
};

export default Grid;
