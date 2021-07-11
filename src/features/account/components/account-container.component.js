import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeContext } from '../../../providers/theme/theme.provider';

const AccountContainer = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles(theme).container}>
            {children}
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: theme.space[4],
        marginTop: theme.space[2],
    }
});

export default AccountContainer
