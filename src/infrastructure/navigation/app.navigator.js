import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

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
    <Tab.Navigator
        screenOptions={screenOptions}
    >
        <Tab.Screen name={routes.restaurants} component={RestaurantsNavigator} />
        <Tab.Screen name={routes.mapView} component={MapScreen} />
        <Tab.Screen name={routes.settings} component={SettingsScreen} />
    </Tab.Navigator>
);

export default AppNavigator;