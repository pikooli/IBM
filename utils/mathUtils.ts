const divisibleBy3 = (value: number) => {
  return value % 3 === 0;
};

const divisibleBy5 = (value: number) => {
  return value % 5 === 0;
};

const divisibleBy3OrBy5 = (value: number) => {
  return divisibleBy3(value) && divisibleBy5(value);
};

export default {
  divisibleBy3,
  divisibleBy5,
  divisibleBy3OrBy5,
};
