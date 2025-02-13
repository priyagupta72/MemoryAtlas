import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const [likes, setLikes] = useState(post?.likes);
  const userId = user?.result?.googleId || user?.result?._id;
  const hasLikePost = post?.likes?.includes(userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikePost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return hasLikePost ? (
        <>
          <ThumbUpAltIcon fontSize="small" /> &nbsp;
          {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" /> &nbsp;
          {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" /> &nbsp; Like
      </>
    );
  };

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        {/* Black Transparent Overlay */}
        <div className={classes.overlay}></div> 
        <CardMedia className={classes.media} image={post.selectedFile || 'https://via.placeholder.com/400'} title={post.title} />
        <div className={classes.overlayText}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
      </ButtonBase>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" disabled={!user?.result} onClick={handleLike} className={classes.likeButton}>
          <Likes />
        </Button>
        {(userId === post?.creator) && (
          <Button size="small" className={classes.deleteButton} onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;



