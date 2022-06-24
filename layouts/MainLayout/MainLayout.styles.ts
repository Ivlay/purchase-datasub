import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  root: {
    minHeight: '100vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',

    '& header, footer': {
      textAlign: 'center',
    },

    '& main': {
      display: 'flex',
      justifyContent: 'center',
      flex: '1 0 auto',
    },
  },
});

export default useStyles;
