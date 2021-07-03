import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Search from '../components/search.component';

const MapScreen = () => {
    return (
        <>
            <Search />
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.container}
            />
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    }
});

export default MapScreen;
