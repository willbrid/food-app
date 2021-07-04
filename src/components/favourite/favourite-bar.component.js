import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import routes from '../../infrastructure/navigation/routes';

import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import Text from '../typography/text.component';
import Spacer from '../spacer/spacer.component';

const FavouriteBar = ({ favourites, onNavigate }) => {
    if(!favourites.length) {
        return null;
    }

    return (
        <View style={styles.wrapper}>
            <Spacer position="left" size="large">
                <Text variant="caption">Favoris</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split(" ").join("");

                        return (
                            <Spacer key={key} position="left" size="medium">
                                <TouchableOpacity onPress={() => {
                                    onNavigate(routes.restaurantDetail, { restaurant: restaurant })
                                }}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    favouritesItem: {
        marginRight: 10
    }
});

export default FavouriteBar;
