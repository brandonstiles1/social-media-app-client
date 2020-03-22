import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ToolTipButton from '../util/ToolTipButton';

// MUI elements
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';


// Icons
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// Redux
import { connect } from 'react-redux';
import { postScream } from '../redux/actions/dataActions';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  ...theme.spreadThis,
  submitButton: {
    position: 'relative'
  },
  progressSpinner: {
    position: 'absolute'
  },
  closeButton: {
    position: 'absolute',
    left: '90%',
    top: '10%'
  }

})

class PostScream extends Component {
  state = {
    open: false,
    body: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    };
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '' })
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({
      open: false,
      errors: {}
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.postScream({
      body: this.state.body
    })
  }

  render() {
    const { errors } = this.state;
    const { classes, UI: { loading } } = this.props;
    return (
      <>
        <ToolTipButton onClick={this.handleOpen} tip='Post a scream'>
          <AddIcon />
        </ToolTipButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <ToolTipButton tip='Close' onClick={this.handleClose} className={classes.closeButton}>
            <CloseIcon />
          </ToolTipButton>
          <DialogTitle>Post a new Scream</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name='body'
                type='text'
                label='Scream'
                multiline
                rows='3'
                placeholder='Enter your scream here'
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submitButton}
                disabled={loading}>
                Submit
                {loading &&
                  (<CircularProgress size={30} className={classes.progressSpinner} />)
                }
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = state => ({
  UI: state.UI
})

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { postScream })(withStyles(styles)(PostScream));
