import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { ThemeContext } from "../../../providers/theme/theme.provider";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

// Compartibilité entre andoird et ios pour StatusBar.currentHeight
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const RestaurantsScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <SafeArea>
      <View style={styles(theme).searchContainer}>
        <Searchbar />
      </View>
      <View style={styles(theme).restaurantListContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeArea>
  );
};

const styles = (theme) => StyleSheet.create({
  searchContainer: {
    padding: theme?.space[3]
  },
  restaurantListContainer: {
    flex: 1,
    padding: theme?.space[3],
    backgroundColor: theme?.colors.bg.primary,
  }
});

export default RestaurantsScreen;
