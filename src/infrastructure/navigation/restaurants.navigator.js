import React from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetail from '../../features/restaurants/screens/restaurant-detail.screen';

import routes from './routes';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS
            }}    
        >
            <RestaurantStack.Screen 
                name={routes.restaurants}
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
                name={routes.restaurantDetail}
                component={RestaurantDetail}
            />
        </RestaurantStack.Navigator>
    );
};

export default RestaurantsNavigator;