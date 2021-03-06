import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";

import { ThemeContext } from '../../../providers/theme/theme.provider';
import { LocationContext } from '../../../services/location/location.context';

const Search = () => {
    const theme = useContext(ThemeContext);
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <View style={styles(theme).searchContainer}>
            <Searchbar 
                placeholder="Rechercher un emplacement" 
                value={searchKeyword} 
                icon="map"
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
      padding: theme?.space[3],
      position: 'absolute',
      zIndex: 999,
      top: 30,
      width: "100%"
    },
});

export default Search;