import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { ThemeContext } from "../../../providers/theme/theme.provider";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Loading from '../../../components/loading/loading.component';
import Search from '../components/search.component';
import FavouriteBar from '../../../components/favourite/favourite-bar.component';
import FadeInView from "../../../components/animations/fade.animation";

import routes from '../../../infrastructure/navigation/routes';

const RestaurantsScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const handlePress = (item) => {
    navigation.navigate(routes.restaurantDetail, { restaurant: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <FadeInView>
        <RestaurantInfoCard restaurant={item} />
      </FadeInView>
    </TouchableOpacity>
  );

  return (
    <SafeArea>
      {
        isLoading === true && (
          <Loading />
        )
      }
      <Search 
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)} 
      />
      {isToggled && <FavouriteBar favourites={favourites} onNavigate={navigation.navigate} />}
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
