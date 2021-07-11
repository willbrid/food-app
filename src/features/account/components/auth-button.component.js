import React, { useContext } from 'react';
import { Button } from 'react-native-paper';

import { ThemeContext } from '../../../providers/theme/theme.provider';

const AuthButton = ({ title = "", onPress, icon = "lock-open-outline" }) => {
    const theme = useContext(ThemeContext);

    return (
        <Button 
            icon={icon}
            mode="contained"
            color={theme.colors.brand.primary}
            style={{padding: theme.space[2]}}
            onPress={onPress}
        >
            {title}
        </Button>
    );
};

export default AuthButton;
