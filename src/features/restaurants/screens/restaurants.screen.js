import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { ThemeContext } from "../../../providers/theme/theme.provider";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Loading from '../../../components/loading/loading.component';

const RestaurantsScreen = () => {
  const theme = useContext(ThemeContext);
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {
        isLoading === true && (
          <Loading />
        )
      }
      <View style={styles(theme).searchContainer}>
        <Searchbar />
      </View>
      <FlatList 
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
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
