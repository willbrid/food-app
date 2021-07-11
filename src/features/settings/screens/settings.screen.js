import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import SafeArea from '../../../components/utility/safe-area.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <Text>Setting Screen</Text>
            <Button title="Logout" onPress={() => onLogout()} />
        </SafeArea>
    )
};

export default SettingsScreen;
