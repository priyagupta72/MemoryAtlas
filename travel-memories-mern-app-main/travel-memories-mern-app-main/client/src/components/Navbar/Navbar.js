import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, IconButton, InputBase, Snackbar, Menu, MenuItem } from '@material-ui/core';
import { Public, Search, ArrowDropDown } from '@material-ui/icons';  
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import MuiAlert from '@material-ui/lab/Alert';
import { getPostsBySearch } from '../../actions/posts';
import memoriesLogo from '../../images/logo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('Memory'); // Default search type
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = useCallback(() => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    setUser(null);
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, logout, user?.token]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const queryParams = searchType === 'Tag' ? { search: '', tags: searchQuery.split(',') } : { search: searchQuery, tags: [] };
      dispatch(getPostsBySearch(queryParams));
      history.push(`/search?searchQuery=${queryParams.search || 'none'}&tags=${queryParams.tags}`);
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    setSearchType(type);
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <Typography variant="h3" className={classes.title}>
          Memory<span className={classes.highlight}>Atlas</span>
        </Typography> 
        <img className={classes.image} src={memoriesLogo} alt="logo" height="45px" />
      </Link>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className={classes.search}>
        <InputBase 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder={`Search ${searchType.toLowerCase()}...`}
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
        />
        <Button onClick={handleMenuOpen} className={classes.dropdownButton}>
          {searchType} <ArrowDropDown />
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(searchType)}>
          <MenuItem onClick={() => handleMenuClose('Memory')}>Memory</MenuItem>
          <MenuItem onClick={() => handleMenuClose('Tag')}>Tag</MenuItem>
        </Menu>
        <IconButton type="submit" className={classes.searchIcon}>
          <Search />
        </IconButton>
      </form>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logoutButton} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" className={classes.signInButton}>
            Sign In
          </Button>
        )}
        <IconButton component={Link} to="/map" className={classes.mapButton}>
          <Public fontSize="large" />
        </IconButton>
      </Toolbar>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="error" elevation={6} variant="filled">
          Please enter a search query.
        </MuiAlert>
      </Snackbar>
    </AppBar>
  );
};

export default Navbar;
