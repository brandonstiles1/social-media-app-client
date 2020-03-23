import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import ToolTipButton from '../../util/ToolTipButton';
import { LikeButton } from './LikeButton';
import Comments from './Comments';
import CommentForm from './CommentForm';

// MUI elements
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';


// Redux
import { connect } from 'react-redux';
import { getScream, clearErrors } from '../../redux/actions/dataActions';

const styles = theme => ({
  ...theme.spreadThis,

  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  dialogContent: {
    padding: '20px'
  },
  closeButton: {
    position: 'absolute',
    left: '90%',
    top: '10%'
  },
  expandButton: {
    position: 'absolute',
    left: '90%'
  },
  spinnerDiv: {
    textAlign: 'center',
    marginTop: '75px',
    marginBottom: '75px'
  }


});

export class ScreamDialog extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true });
    this.props.getScream(this.props.screamId);
  }

  handleClose = () => {
    this.setState({ open: false });
    this.props.clearErrors();
  }

  render() {
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments
      },
      UI: {
        loading
      }
    } = this.props;

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={200} />
      </div>
    ) : (
        <Grid container spacing={10}>
          <Grid item sm={4}>
            <img src={userImage} alt='Profile' className={classes.profileImage} />
          </Grid>
          <Grid item sm={6}>
            <Typography
              component={Link}
              color='primary'
              variant='h5'
              to={`/users/${userHandle}`}
            >
              @{userHandle}
            </Typography>
            <hr className={classes.invisibleSeparator} />
            <Typography
              variant='body2'
              color='textSecondary'
            >
              {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
            </Typography>
            <hr className={classes.invisibleSeparator} />
            <Typography variant='body1'>{body}</Typography>
            <LikeButton screamId={screamId} />
            <span>{likeCount} Likes</span>
            <ToolTipButton tip='comments'>
              <ChatIcon color='primary' />
            </ToolTipButton>
            <span>{commentCount} Comments</span>
          </Grid>
          <hr className={classes.visibleSeparator} />
          <CommentForm screamId={screamId} />
          <Comments comments={comments} />
        </Grid>
      )

    return (
      <>
        <ToolTipButton onClick={this.handleOpen} tip='Expand Scream' btnClassName={classes.expandButton}>
          <UnfoldMore color='primary' />
        </ToolTipButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <ToolTipButton
            tip='Close'
            onClick={this.handleClose}
            btnClassName={classes.closeButton}
          >
            <CloseIcon />
          </ToolTipButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>

      </>
    )
  }
}

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
})

const mapActionsToProps = {
  getScream,
  clearErrors
};

ScreamDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ScreamDialog))

