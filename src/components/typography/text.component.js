import React, { useContext } from 'react';
import { Text as TextRN, StyleSheet } from 'react-native';

import { ThemeContext } from '../../providers/theme/theme.provider';

const Text = ({ variant, children }) => {
    const theme = useContext(ThemeContext);
    const variantStyle = variants[variant](theme);

    return <TextRN style={{...styles(theme).defaultTextStyles, ...variantStyle}}>{children}</TextRN>;
};

const variants = {
    body: (theme) => styles(theme).body,
    label: (theme) => styles(theme).label,
    caption: (theme) => styles(theme).caption,
    error: (theme) => styles(theme).error,
    hint: (theme) => styles(theme).hint,
};

const styles = (theme) => StyleSheet.create({
    defaultTextStyles: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.regular,
        color: theme.colors.text.primary,
        flexWrap: "wrap",
        marginTop: 0,
        marginBottom: 0, 
    },
    body: {
        fontSize: theme.fontSizes.body
    },
    label: {
        fontFamily: theme.fonts.heading,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.medium,
    },
    caption: {
        fontSize: theme.fontSizes.caption,
        fontWeight: theme.fontWeights.bold,
    },
    hint: {
        fontSize: theme.fontSizes.body
    },
    error: {
        color: theme.colors.text.error
    }
});

Text.defaultProps = {
    variant: "body"
};

export default Text;