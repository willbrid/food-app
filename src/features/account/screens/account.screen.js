import React from 'react';

import AccountBackground from '../components/account-background.component';
import AccountContainer from '../components/account-container.component';
import AccountCover from '../components/account-cover.component';
import AuthButton from '../components/auth-button.component';
import Spacer from '../../../components/spacer/spacer.component';
import Title from '../components/title.component';

import routes from '../../../infrastructure/navigation/routes';

const AccountScreen = ({ navigation }) => {
    const handlePress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <AccountBackground>
            <AccountCover />
            <Title content="Miam Miam" />
            <AccountContainer>
                <AuthButton 
                    title="Login" 
                    onPress={() => handlePress(routes.login)}
                />
                <Spacer size="large">
                    <AuthButton 
                        title="Register" 
                        onPress={() => handlePress(routes.register)}
                    />
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};

export default AccountScreen;
