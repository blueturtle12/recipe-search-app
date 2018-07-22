import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogCard from './DialogCard';

const styles = {
    card: {
      width: 320,
      height: 380,
      margin: '1em 1em 0 1em',

    },
    title: {
      fontSize: '1em',
      fontWeight: 'bold' 
    },
    subtitles: {
      color: '#AEA7A7',

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    appBar: {
        position: 'relative',
      },
      flex: {
        flex: 1,
    },
    cardActions: {
      marginTop: '1em',
      position: 'absolute'
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RecipeCard extends Component {
  state = {
    open: false
  }
    handleChosenRecipe = () => {
    this.setState({ open:true});
    console.log(this.props)
    }

    handleClose= () => {
    this.setState({ open: false});
    }  

  render() {
    const { classes } = this.props;
    const { recipe } = this.props;
    const preparationTime = (recipe.totalTime === 0) ? 30 : recipe.totalTime ;

    return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
            {recipe.label}
          </Typography>
          <div>
            <Typography component="span" className={classes.subtitles}>
                {preparationTime} minutes
            </Typography>
            <Typography component="span" className={classes.subtitles}>
                {Math.floor(recipe.calories)} calories
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={this.handleChosenRecipe}>
            Check it out
          </Button>
        </CardActions>
      </Card>
      <Dialog
                fullScreen={true}
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {recipe.label}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <DialogCard chosenRecipe={this.props}/>
        </Dialog>
     
    </div>
       
    )
  }
}

export default withStyles(styles)(RecipeCard);


  /*
     <Dialog
                fullScreen={true}
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {this.state.currentTitle}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                    <DialogCard chosenRecipe={this.state.currentRecipe}/>
        </Dialog>
  */

 /*
        <div className="card">
        <div>
            <img className="image" src={this.props.recipe.image} alt="" />
        </div>
        <div className="description">
            <div>
                <h5 className="sub">Recipe</h5>
                <h4 className="secondSub">{this.props.recipe.label}</h4>
            </div>
            <div>
                <h5 className="sub">Time</h5>
                <h4 className="secondSub">{this.props.recipe.totalTime}</h4>
            </div>
            <div>
                <h5 className="sub">calories</h5>
                <h4 className="secondSub">{Math.floor(this.props.recipe.calories)}</h4>
            </div>
        </div>
    </div>
    */