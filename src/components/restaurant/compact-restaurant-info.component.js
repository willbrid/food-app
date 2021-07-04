import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import WebView from 'react-native-webview';
import Text from '../typography/text.component';

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap = false }) => {
    return (
        <View style={styles.item}>
            {
                isAndroid && isMap
                ?
                <WebView 
                    style={styles.image} 
                    source={{ uri: restaurant.photos[0] }} 
                    onError={() => {}}
                />
                :
                <Image 
                    style={styles.image} 
                    source={{ uri: restaurant.photos[0] }} 
                    onError={() => {}} 
                /> 
            }
            
            <Text center variant="caption" numberOfLines={3} >
                {restaurant.name}
            </Text>           
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        maxWidth: 120,
        alignItems: 'center'
    },
    image: {
        borderRadius: 10,
        height: 100,
        width: 120
    }
});

export default CompactRestaurantInfo;
