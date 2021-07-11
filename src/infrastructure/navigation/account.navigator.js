import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';

import LoginScreen from '../../features/account/screens/login.screen';
import AccountScreen from '../../features/account/screens/account.screen';
import RegisterScreen from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={routes.account} component={AccountScreen} />
        <Stack.Screen name={routes.login} component={LoginScreen} />
        <Stack.Screen name={routes.register} component={RegisterScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;