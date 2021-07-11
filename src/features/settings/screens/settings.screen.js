import React, { useContext } from 'react';
import { List, Avatar } from 'react-native-paper';

import SafeArea from '../../../components/utility/safe-area.component';
import SettingsItem from '../components/settings-item.component';
import AvatarContainer from '../components/avatar-container.component';
import Spacer from '../../../components/spacer/spacer.component';
import Text from '../../../components/typography/text.component';

import routes from '../../../infrastructure/navigation/routes';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon 
                    size={180}
                    icon="human"
                    backgroundColor="#2182BD"
                />
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem 
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate(routes.favourites)}
                />
                <SettingsItem 
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
};

export default SettingsScreen;
