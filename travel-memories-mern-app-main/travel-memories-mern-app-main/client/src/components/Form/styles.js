import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    borderRadius: '12px',
    maxWidth: '500px',
    margin: 'auto',
    position: 'relative',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  formHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    color: '#f50057',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: theme.spacing(2),
  },
}));
