import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  /* ✅ Bluish-Themed Motivation Card */
  motivationCard: {
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    background: 'linear-gradient(135deg,rgb(130, 205, 231) 0%,rgb(124, 166, 220) 100%)', // Light to dark blue
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#FFFFFF', // Pure white text
  },
  motivationTitle: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginBottom: theme.spacing(1),
    color: '#FFFFFF', // White title
  },
  motivationText: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
    lineHeight: 1.5,
    color: '#FFFFFF', // White description text
  },

  /* ✅ Reddish Button */
  shareButton: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: 25,
    backgroundColor: '#E53935', // Reddish button
    color: '#FFFFFF', // White text on button
    transition: '0.3s ease',
    '&:hover': {
      backgroundColor: '#C62828', // Darker red on hover
    },
  },

  /* ✅ Modal Styles */
  modalPaper: {
    position: 'absolute',
    width: '50%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
