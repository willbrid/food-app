import React  from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import routes from './routes';

import SettingsScreen from '../../features/settings/screens/settings.screen';
import FavouritesScreen from '../../features/settings/screens/favourites.screen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <SettingsStack.Screen 
                options={{
                    header: () => null
                }}
                name={routes.settings}
                component={SettingsScreen}
            />
            <SettingsStack.Screen 
                name={routes.favourites}
                component={FavouritesScreen}
            />
        </SettingsStack.Navigator>
    );  
};

export default SettingsNavigator;