import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    padding: '8px 20px',  // Slightly reduced padding to maintain navbar height
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    minHeight: '64px',  // Ensuring consistent navbar height
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '30px', // Slightly reduced for balance
    color: '#222',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
    marginRight: '12px',
  },
  highlight: {
    color: '#3f83f8',
    fontWeight: 'bold',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',  // Smooth rounded look
    backgroundColor: '#f8f9fa',
    padding: '4px 12px',  // Reduced padding for slim design
    width: '32%',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    minHeight: '38px',  // Prevents excessive height
  },
  searchDropdown: {
    backgroundColor: '#fff',
    padding: '4px 8px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    marginRight: '8px',
    fontSize: '14px',
    height: '32px', // Keeps it aligned with input
  },
  inputRoot: {
    color: '#333',
    flex: 1, 
    fontSize: '14px', // Smaller font to prevent thickness
    height: '32px', // Adjust input height
  },
  searchButton: {
    backgroundColor: '#3f83f8',
    color: 'white',
    padding: '6px',
    borderRadius: '50%',
    height: '32px',
    width: '32px',
    minWidth: '32px', // Ensuring it stays a perfect circle
    '&:hover': {
      backgroundColor: '#366ad3',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    marginLeft: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    backgroundColor: '#3f51b5',
    color: '#fff',
  },
  logoutButton: {
    marginLeft: '10px',
    background: 'linear-gradient(135deg, #ff5757 0%, #ff4444 100%)',
    color: 'white',
    padding: '6px 12px',
    fontWeight: 'bold',
    borderRadius: '20px',
    fontSize: '14px',
    '&:hover': {
      background: 'linear-gradient(135deg, #ff4444 0%, #ff5757 100%)',
    },
  },
  signInButton: {
    background: 'linear-gradient(135deg, #405cf5 0%, #3f83f8 100%)',
    color: 'white',
    padding: '6px 12px',
    fontWeight: 'bold',
    borderRadius: '20px',
    fontSize: '14px',
    '&:hover': {
      background: 'linear-gradient(135deg, #3f83f8 0%, #405cf5 100%)',
    },
  },
  mapButton: {
    marginLeft: '10px',
    backgroundColor: '#f1f3f5',
    padding: '8px',
    borderRadius: '50%',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));
