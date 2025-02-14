// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   },
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '100%',
//     position: 'relative',
//   },
//   overlay: {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     color: 'white',
//   },
//   overlay2: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     color: 'white',
//   },
//   grid: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   },
//   title: {
//     padding: '0 16px',
//   },
//   cardActions: {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   cardAction: {
//     display: 'block',
//     textAlign: 'initial',
//   },
// });


// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     borderRadius: '10px',
//     transition: 'transform 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '100%',
//     position: 'relative',
//     background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', /* 🎨 Soft gray gradient */
//     border: '1px solid rgba(0, 0, 0, 0.05)',
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//     transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//     '&:hover': {
//       transform: 'translateY(-5px)',
//       boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.12)',
//     },
//   },
//   overlay: {
//     position: 'absolute',
//     top: '15px',
//     left: '15px',
//     color: 'white',
//     background: 'rgba(0, 0, 0, 0.6)', /* 🎨 Darker but softer overlay */
//     padding: '5px 12px',
//     borderRadius: '8px',
//     fontWeight: 'bold',
//   },
//   overlay2: {
//     position: 'absolute',
//     top: '15px',
//     right: '15px',
//     color: 'white',
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '10px 20px',
//   },
//   title: {
//     padding: '0 16px',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333', /* 🎨 Improved readability */
//   },
//   cardActions: {
//     padding: '8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     borderTop: '1px solid #ddd',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cardAction: {
//     display: 'block',
//     textAlign: 'initial',
//   },
//   likeButton: {
//     background: 'linear-gradient(135deg,rgb(120, 136, 224) 0%, #3f83f8 100%)', /* 🎨 Matches Search Button */
//     color: 'white',
//     borderRadius: '20px',
//     padding: '6px 15px',
//     fontWeight: 'bold',
//     transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
//     '&:hover': {
//       background: 'linear-gradient(135deg, #3f83f8 0%, #405cf5 100%)',
//       transform: 'scale(1.1)',
//     },
//   },
//   deleteButton: {
//     background: 'linear-gradient(135deg, #ff5757 0%, #ff4444 100%)', /* 🎨 Improved Delete Button */
//     color: 'white',
//     borderRadius: '20px',
//     padding: '6px 15px',
//     fontWeight: 'bold',
//     transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
//     '&:hover': {
//       background: 'linear-gradient(135deg, #ff4444 0%, #ff5757 100%)',
//       transform: 'scale(1.1)',
//     },
//   },
// });



import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', /* Soft gray gradient */
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0px 12px 25px rgba(0, 0, 0, 0.12)',
    },
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)', /* Black Transparent Overlay */
    borderRadius: '15px',
  },
  overlayText: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 20px',
  },
  title: {
    padding: '0 16px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  cardActions: {
    padding: '8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #ddd',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  likeButton: {
    background: 'linear-gradient(135deg,rgb(126, 140, 222) 0%,rgb(125, 170, 246) 100%)', //'linear-gradient(135deg,rgb(120, 136, 224) 0%, #3f83f8 100%)', 'linear-gradient(135deg, #3f83f8 0%, #405cf5 100%)',
    color: 'white',
    borderRadius: '20px',
    padding: '6px 15px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(135deg, #3f83f8 0%, #405cf5 100%)',
      transform: 'scale(1.1)',
    },
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #ff5757 0%, #ff4444 100%)',
    color: 'white',
    borderRadius: '20px',
    padding: '6px 15px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(135deg, #ff4444 0%, #ff5757 100%)',
      transform: 'scale(1.1)',
    },
  },
});
