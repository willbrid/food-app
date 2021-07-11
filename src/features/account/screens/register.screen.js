import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import AccountBackground from '../components/account-background.component';
import AccountContainer from '../components/account-container.component';
import AccountCover from '../components/account-cover.component';
import AuthButton from '../components/auth-button.component';
import Spacer from '../../../components/spacer/spacer.component';
import Text from '../../../components/typography/text.component';
import AuthInput from '../components/auth-input.component';
import Title from '../components/title.component';
import ErrorContainer from '../components/error-container.component';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const { onRegister, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title content="Miam Miam" />
            <AccountContainer>
                <AuthInput 
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput 
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput 
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </Spacer>
                {error && (
                    <ErrorContainer>
                        <Text variant="error" >{error}</Text>
                    </ErrorContainer>
                )}
                <Spacer size="large">
                    {!isLoading ? (
                        <AuthButton 
                            title="Register"
                            icon="email"
                            onPress={() => onRegister(email, password, repeatedPassword)}
                        />
                    ) : (
                        <ActivityIndicator animating={true} color={Colors.blue300} />
                    )}
                </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton 
                    title="Back"
                    icon={null} 
                    onPress={() => navigation.goBack()}
                />
            </Spacer>
        </AccountBackground>
    );
};

export default RegisterScreen;
