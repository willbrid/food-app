import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { ThemeContext } from '../../providers/theme/theme.provider';

const SafeArea = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <SafeAreaView style={styles(theme).container}>
          {children}
        </SafeAreaView>
    );
};

const styles = (theme) => StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0, // Compatibilité entre andoird et ios pour StatusBar.currentHeight
      backgroundColor: theme.colors.bg.primary
    }
});

export default SafeArea;