import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { getPosts } from '../actions/posts';
import useStyles from './styles';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [dispatch, page]);

  return (
    <div className={classes.footerPagination}> {/* Added wrapper for styling */}
      <Pagination
        classes={{ ul: classes.ul }}
        count={numberOfPages || 1}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            className={classes.paginationItem} // Apply styles here
            component={Link}
            to={`/posts?page=${item.page}`}
          />
        )}
      />
    </div>
  );
};

export default Paginate;
