import React from 'react'
import noImg from '../images/blankUser.jpg';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// MUI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  ...theme.spreadThis
})

const ScreamSkeleton = props => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={ classes.card } key={ index }>
      <CardMedia className={ classes.cover } image={ noImg } />
      <CardContent className={ classes.cardContent }>
        <div className={ classes.handle } />
        <div className={ classes.date } />
        <div className={ classes.fullLine } />
        <div className={ classes.fullLine } />
        <div className={ classes.halfLine } />
      </CardContent>
    </Card>
  ))

  return (
    <>
      { content }
    </>
  )
}

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
