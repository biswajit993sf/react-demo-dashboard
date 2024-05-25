// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0F1015',
            paper: '#15171C',
        },
        text: {
            primary: '#dae0f1',
            secondary: '#b0b0b0',
        },
    },
    typography: {
        h1: {
            fontSize: '1.75rem',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '1.1rem',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        h6: {
            fontSize: '0.875rem',
            fontWeight: 'bold',
        },
    },
});

export default theme;
