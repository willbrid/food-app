import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = ({ size = 50 }) => {
    return (
        <View style={styles(size).container}>
            <ActivityIndicator 
                size={size}
                style={styles(size).activityIndicatorContainer}
                animating={true}
                color={Colors.blue300}
            />
        </View>
    )
}

const styles = (size) => StyleSheet.create({
    container: {
        position: 'absolute',
        top: "50%",
        left: "50%"
    },
    activityIndicatorContainer: {
        marginLeft: 0 - Math.ceil(size / 2)
    }
});

export default Loading;
