import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToolTipButton from '../../util/ToolTipButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';

// Redux
import { connect } from 'react-redux';

// MUI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// Icons
import HomeIcon from '@material-ui/icons/Home';

export class Navbar extends Component {
  render () {
    const { authenticated } = this.props
    return (
      <div>
        <AppBar>
          <Toolbar className='nav-container'>
            { authenticated ?
              (
                <>
                  <PostScream />
                  <Link to='/'>
                    <ToolTipButton tip='Home'>
                      <HomeIcon />
                    </ToolTipButton>
                  </Link>
                  <Notifications />
                </>
              )
              :
              (
                <>
                  <Button color='inherit' component={ Link } to='/login'>Login</Button>
                  <Button color='inherit' component={ Link } to='/'>Home</Button>
                  <Button color='inherit' component={ Link } to='/signup'>Signup</Button>
                </>
              )
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(Navbar)
