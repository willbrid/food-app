import React from 'react';
import { StyleSheet, View } from 'react-native';

const AccountCover = () => (
    <View style={styles.container} />
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    }
});

export default AccountCover;
