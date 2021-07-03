import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import Search from '../components/search.component';
import MapCallout from '../components/map-callout.component';

import routes from '../../../infrastructure/navigation/routes';

const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        if(location) {
            const northeastLat = viewport.northeast.lat;
            const southwestLat = viewport.southwest.lat;

            setLatDelta(northeastLat - southwestLat);
        }
    }, [location, viewport]);

    const handlePress = (item) => {
        navigation.navigate(routes.restaurantDetail, { restaurant: item });
    };

    return (
        <>
            <Search />
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.container}
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02
                }}
            >
                {
                    restaurants.map((restaurant) => (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                longitude: restaurant.geometry.location.lng,
                                latitude: restaurant.geometry.location.lat
                            }}
                        >
                            <Callout onPress={() => handlePress(restaurant)}>
                                <MapCallout restaurant={restaurant} />
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>
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
