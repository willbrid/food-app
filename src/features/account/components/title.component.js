import React from 'react';
import { Text } from 'react-native';

const Title = ({ content }) => (
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{content}</Text>  
);

export default Title;
