import React, { useContext } from 'react';
import { List } from 'react-native-paper';

import { ThemeContext } from '../../../providers/theme/theme.provider';

const SettingsItem = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <List.Item {...props} style={{padding: theme.space[3]}} />
    );
};

export default SettingsItem
