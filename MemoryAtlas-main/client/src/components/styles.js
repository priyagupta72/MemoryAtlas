import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  ul: {
    justifyContent: 'center',
    padding: 0,
    margin: '0 auto',
    display: 'flex',
  },
  footerPagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
  },
  paginationItem: {
    borderRadius: '25px !important',
    margin: '0 5px !important',
    background: '#ADD8E6 !important', /* Light Blue */
    color: 'white !important',
    transition: 'background 0.3s ease-in-out',
    '&:hover': {
      background: '#87CEEB !important', /* Slightly darker on hover */
    },
    '&.Mui-selected': {
      background: '#1E90FF !important', /* Dark Blue when selected */
      color: 'white !important',
    },
  },
}));
