import { Box } from "components/grid";

// Create an array of box
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
