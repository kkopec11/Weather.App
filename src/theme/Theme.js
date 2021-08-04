import { ThemeProvider } from 'styled-components';

import theme from "./styles";

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Theme;