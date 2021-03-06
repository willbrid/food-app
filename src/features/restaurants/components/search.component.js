import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";

import { ThemeContext } from '../../../providers/theme/theme.provider';
import { LocationContext } from '../../../services/location/location.context';

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const theme = useContext(ThemeContext);
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <View style={styles(theme).searchContainer}>
            <Searchbar 
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggle}
                placeholder="Rechercher un emplacement" 
                value={searchKeyword} 
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    searchContainer: {
      padding: theme?.space[3]
    },
});

export default Search;
