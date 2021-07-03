import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { ThemeContext } from "../../../providers/theme/theme.provider";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Loading from '../../../components/loading/loading.component';
import Search from '../components/search.component';

import routes from '../../../infrastructure/navigation/routes';

const RestaurantsScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  const handlePress = () => {
    navigation.navigate(routes.restaurantDetail);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress}>
      <RestaurantInfoCard restaurant={item} />
    </TouchableOpacity>
  );

  return (
    <SafeArea>
      {
        isLoading === true && (
          <Loading />
        )
      }
      <Search />
      <FlatList 
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.name.toString()}
          contentContainerStyle={{ padding: theme.space[3] }}
          ItemSeparatorComponent={() => <Spacer size="large" />}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
