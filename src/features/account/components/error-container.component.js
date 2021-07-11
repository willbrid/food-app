import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';

import { ThemeContext } from '../../../providers/theme/theme.provider';

const ErrorContainer = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles(theme).container}>
            { children }
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
        maxWidth: 300,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: theme.space[2],
        marginBottom: theme.space[2]
    }
});

export default ErrorContainer;
