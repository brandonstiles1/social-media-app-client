import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ToolTipButton from '../../util/ToolTipButton';

// MUI elements
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/Button';

// Icons
import DeleteOutline from '@material-ui/icons/DeleteOutline';

// Redux
import { connect } from 'react-redux';
import { deleteScream } from '../../redux/actions/dataActions';

const styles = {
  deleteButton: {
    position: 'absolute',
    left: '90%',
    top: '10%'  
  }
}

class DeleteScream extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true});
  }

  handleClose = () => {
    this.setState({ open: false});
  }

  deleteScream  = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  }


  render() {
    const { classes } = this.props;

    return (
      <>
      <ToolTipButton tip='Delete Scream' onClick={this.handleOpen} btnClassName={classes.deleteButton}>
        <DeleteOutline color='secondary'/>
      </ToolTipButton>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        fullWidth
        maxWidth='sm'
        >
          <DialogTitle>
            Are you sure you want to delete this scream?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.deleteScream} color='secondary'>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
        
    
    )
  }
}

DeleteScream.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired
}

export default connect(null, { deleteScream })(withStyles(styles)(DeleteScream))