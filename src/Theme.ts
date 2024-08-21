import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"open sans", sans-serif',
    h1: {
      fontFamily: '"open sans", serif',
    },
    h2: {
      fontFamily: '"open sans", serif',
    },
    h3: {
      fontFamily: '"open sans", serif',
    },
    h4: {
      fontFamily: '"open sans", serif',
    },
    h5: {
      fontFamily: '"open sans", serif',
    },
    h6: {
      fontFamily: '"open sans", serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Matemasie&display=swap');
        
        .special-text {
          font-family: 'Matemasie', sans-serif;
        }
      `,
    },
  },
});

export default theme;