import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeContext } from '../../../providers/theme/theme.provider';

const AnimationWrapper = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={styles(theme).container}>
            {children}
        </View>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
        width: "100%",
        height: "40%",
        position: 'absolute',
        top: 30,
        padding: theme.space[2]
    }
});

export default AnimationWrapper;
