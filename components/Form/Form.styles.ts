import { makeStyles } from 'tss-react/mui';

const INPUT_GAP = 15;

const useStyles = makeStyles()({
  root: {
    padding: 20,
    maxWidth: 600,
    maxHeight: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: INPUT_GAP,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0px 0px 5px #fff',

    '& input': {
      boxShadow: '0px 4px 10px #ccc',
    },

    '& pre': {
      color: '#000',
    },
  },
  bottomInputs: {
    display: 'flex',
    gap: INPUT_GAP,
  },
  submitButton: {
    position: 'relative',
    maxWidth: 200,
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    zIndex: 0,

    '&:hover': {
      '&::before': {
        width: '100%',
      },
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: 0,
      backgroundColor: '#09116e',
      transition: 'width 0.3s',
      zIndex: -1,
    },
  },
});

export default useStyles;
