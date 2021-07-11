import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';
import SettingsScreen from '../../features/settings/screens/settings.screen';

import routes from './routes';

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings"
};

const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        )
    };
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator
                    screenOptions={screenOptions}
                >
                    <Tab.Screen name={routes.restaurants} component={RestaurantsNavigator} />
                    <Tab.Screen name={routes.mapView} component={MapScreen} />
                    <Tab.Screen name={routes.settings} component={SettingsScreen} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
);

export default AppNavigator;