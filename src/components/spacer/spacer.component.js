import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  console.log("Position : ", `${property}: ${value};`);

  return `${property}: ${value};`;
};

const Spacer = styled.View`
  margin-left: 16px;
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
