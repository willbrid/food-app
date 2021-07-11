import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import Spacer from '../../../components/spacer/spacer.component';
import Text from '../../../components/typography/text.component';
import SafeArea from '../../../components/utility/safe-area.component';
import RestaurantInfoCard from '../../restaurants/components/restaurant-info-card.component';

import { ThemeContext } from '../../../providers/theme/theme.provider';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import routes from '../../../infrastructure/navigation/routes';

const FavouritesScreen = ({ navigation }) => {
    const theme = useContext(ThemeContext)
    const { favourites } = useContext(FavouritesContext);

    const handlePress = (item) => {
        navigation.navigate(routes.restaurantDetail, { restaurant: item });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <RestaurantInfoCard restaurant={item} />
        </TouchableOpacity>
    );

    return favourites.length ? (
        <SafeArea style={{marginTop: 0}}>
            <FlatList 
                data={favourites}
                renderItem={renderItem}
                keyExtractor={(item) => item.name.toString()}
                contentContainerStyle={{ padding: theme.space[3] }}
                ItemSeparatorComponent={() => <Spacer size="large" />}
            />
        </SafeArea>
    ) : (
        <SafeArea style={{alignItems: 'center', justifyContent: 'center', marginTop: 0}}>
            <Text center>No Favourite yet</Text>
        </SafeArea>
    );
};

export default FavouritesScreen;
