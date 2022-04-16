import mathUtils from "utils/mathUtils";

const COLORS = {
  "3": "rgb(239, 68, 68)",
  "5": "rgb(34, 197, 94)",
  "3&5": "rgb(234, 179, 8)",
};

// Pick color by divisible
const pickColor = (value: number) => {
  if (value == null) {
    return null;
  }
  if (mathUtils.divisibleBy3OrBy5(value)) {
    return COLORS["3&5"];
  }
  if (mathUtils.divisibleBy3(value)) {
    return COLORS["3"];
  }
  if (mathUtils.divisibleBy5(value)) {
    return COLORS["5"];
  }
};

export default pickColor;
