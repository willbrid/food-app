import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { ThemeContext } from "../../../providers/theme/theme.provider";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";

// Compartibilité entre andoird et ios pour StatusBar.currentHeight
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const data = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 }
];

const RestaurantsScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <SafeArea>
      <View style={styles(theme).searchContainer}>
        <Searchbar />
      </View>
      <FlatList 
          data={data}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name.toString()}
          contentContainerStyle={{ padding: theme.space[3] }}
          ItemSeparatorComponent={() => <Spacer size="large" />}
      />
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
