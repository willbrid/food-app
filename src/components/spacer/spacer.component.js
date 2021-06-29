import React, { useContext } from 'react';
import { View } from 'react-native';

import { ThemeContext } from '../../providers/theme/theme.provider';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme?.space[sizeIndex];

  return {[property]: value};
};

const Spacer = ({ position, size }) => {
  const theme = useContext(ThemeContext);

  return <View style={getVariant(position, size, theme)} />
}

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
