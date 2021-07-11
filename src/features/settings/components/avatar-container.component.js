import React from 'react';
import { View } from 'react-native';

const AvatarContainer = ({ children }) => (
    <View style={{alignItems: 'center'}}>
        {children}
    </View>
);

export default AvatarContainer;