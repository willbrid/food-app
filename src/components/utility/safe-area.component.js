import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// Compartibilité entre andoird et ios pour StatusBar.currentHeight
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

export default SafeArea;