import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import ToolTipButton from '../../util/ToolTipButton';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog'
import LikeButton from './LikeButton';

// MUI elements
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Icons
import ChatIcon from '@material-ui/icons/Chat';

// Redux
import { connect } from 'react-redux';

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
        credentials: { handle }
      }
    } = this.props;

    const deleteButton = 
      authenticated && userHandle === handle ? (
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
          <Typography variant='body2' color='textSecondary'> 
            {dayjs(createdAt).fromNow()}
           </Typography>

          <Typography variant='body1'>{body}</Typography>
          
          <LikeButton screamId={screamId} />
          <span>{likeCount} Likes</span>
          
          <ToolTipButton tip='comments'>
            <ChatIcon color='primary' />
          </ToolTipButton>
          
          <span>{ commentCount } Comments</span>
          
          {deleteButton}
          
          <ScreamDialog screamId={screamId} userHandle={userHandle} />
        </CardContent>
      </Card>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps)(withStyles(styles)(Scream));