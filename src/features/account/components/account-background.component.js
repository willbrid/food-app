import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const AccountBackground = ({ children }) => {
    const path = require("../../../../assets/home_bg.jpg");

    return (
        <ImageBackground source={path} style={styles.container}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AccountBackground;
