import React from "react";
import { FloatInput } from "components/inputs/";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form: React.FC<Props> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex mb-3 lg:w-1/3">
      <FloatInput label="Number of box" name="size" type="number" min={1} />
      <button
        type="submit"
        className="border rounded px-3 h-10 bg-blue-300 hover:bg-blue-500 ml-3"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
