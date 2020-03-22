import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import ToolTipButton from '../util/ToolTipButton';
import DeleteScream from './DeleteScream';


// MUI elements
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Icons
import ChatIcon from '@material-ui/icons/Chat';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// Redux
import { connect } from 'react-redux';
import { likeScream, unlikeScream } from '../redux/actions/dataActions';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: '20px',
  },
  image: {
    minWidth: '200px',
  },
  content: {
    padding: '25px',
    objectFit: 'cover',
  }
};

class Scream extends Component {

  likedScream = () => {
    if (this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.scream.screamId))
      return true;
      else return false;
  }

  likeScream = () => {
    this.props.likeScream(this.props.scream.screamId)
  }

  unlikeScream = () => {
    this.props.unlikeScream(this.props.scream.screamId)
  }

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        credentials: {
          handle
        }
      }
    } = this.props;

    const likeButton = !authenticated ? (
      <ToolTipButton tip='Like'>
        <Link to='/login'>
          <FavoriteBorder color='primary' />
        </Link>
      </ToolTipButton>
    ) : (
      this.likedScream() ? (
        <ToolTipButton tip='Unlike' onClick={this.unlikeScream}>
          <Favorite color='primary' />
        </ToolTipButton>
      ) : (
        <ToolTipButton tip='Like' onClick={this.likeScream}>
          <FavoriteBorder color='primary' />
        </ToolTipButton>
      )

    )

    const deleteButton = authenticated && userHandle === handle ? (
      <DeleteScream screamId={screamId} />
    ) : null

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          className={classes.image}
          title="Profile Image" 
        />
        <CardContent className={classes.content}>
          <Typography
            variant='h5'
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {/* // Delete button */}
          <Typography variant='body2' color='textSecondary'>
            {dayjs(createdAt).fromNow()}
           </Typography>
          <Typography variant='body1'>{body}</Typography>
          {likeButton}
          <span>{likeCount} Likes</span>
          <ToolTipButton tip='comments'>
            <ChatIcon color='primary' />
          </ToolTipButton>
          {deleteButton}
        </CardContent>
      </Card>
    )
  }
}

Scream.propTypes = {
  likeScream: PropTypes.func.isRequired,
  unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeScream,
  unlikeScream
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Scream));