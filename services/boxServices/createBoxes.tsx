import { Box } from "components/grid";

const createBoxes = (size: number) => {
  if (size == null) {
    return [];
  }
  const boxes = [];
  for (let i = 1; i <= size; i++) {
    boxes.push(<Box value={i} key={i} />);
  }
  return boxes;
};

export default createBoxes;
