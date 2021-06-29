import React, { createContext } from 'react';

import theme from '../../infrastructure/theme';

export const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};

export default ThemeProvider;