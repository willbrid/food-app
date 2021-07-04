import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

    const handlePress = () => {
        if(!isFavourite) {
            addToFavourites(restaurant);
        } else {
            removeFromFavourites(restaurant);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.favouriteButton}>
            <AntDesign 
                name={isFavourite ? "heart" : "hearto"} 
                size={25} 
                color={isFavourite ? "red" : "white"} 
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    favouriteButton: {
        position: 'absolute',
        top: 25,
        right: 25,
        zIndex: 9
    }
});

export default Favourite;
