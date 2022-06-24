import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          '& input': {
            padding: '10px 0 10px 15px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        body: {
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: '#000000d4',
          backgroundImage: 'linear-gradient(45deg, #000000d4 50%, #000 50%)',
          color: '#FFF',
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
          {
            transition: 'background-color 5000s ease-in-out 0s',
          },
      },
    },
  },
});

export default theme;
