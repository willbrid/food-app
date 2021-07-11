import React from 'react';
import LottieView from 'lottie-react-native';

import AccountBackground from '../components/account-background.component';
import AccountContainer from '../components/account-container.component';
import AccountCover from '../components/account-cover.component';
import AuthButton from '../components/auth-button.component';
import Spacer from '../../../components/spacer/spacer.component';
import Title from '../components/title.component';
import AnimationWrapper from '../components/animation-wrapper.component';

import routes from '../../../infrastructure/navigation/routes';

const AccountScreen = ({ navigation }) => {
    const handlePress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>  
                <LottieView 
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
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
