import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import DialogCard from './DialogCard';


const randomNum1 = Math.floor(Math.random() * 90) + 1;
const randomNum2 = randomNum1 + 10;


const styles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    button: {
        marginTop: '1em'
    },
    textField:{
        background: 'white',

        width: '14em',
        height: '2.5em',
        marginTop: '1em',
        paddingLeft: '1em',
        paddingRight: '1em',
    },
};



function Transition(props) {
    return <Slide direction="up" {...props} />;
}
  

class Search extends Component {
    state = {
        apiUrl: 'https://api.edamam.com/search',
        appID: '5a5dae60',
        appKey: '785132327b135ee24d04b5092ac21f6a',
        searchText: 'healthy',
        randomArray: [],
        open: false,
        currentRecipe: '',
        currentTitle: ''
    }
    componentDidMount() {
        this.setState(() => {
            this.apiCall();
        });
        axios.get(`${this.state.apiUrl}?q=$chicken&app_id=${this.state.appID}&app_key=${this.state.appKey}
        &from=${randomNum1}&to=${randomNum2}`)
        .then(res => this.setState({ randomArray: res.data.hits}))
        .catch(err => console.log(err));     
    }

    apiCall () {
        axios.get(`${this.state.apiUrl}?q=${this.state.searchText}&app_id=${this.state.appID}&app_key=${this.state.appKey}
        &from=${randomNum1}&to=${randomNum2}`)
        .then(res => this.props.onTextChange(res.data.hits))
        .catch(err => console.log(err)); 
    }
    

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val},() => {
            searchText: val
        });  
    };

     onKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.apiCall();       
        };
    }; 
    
    onButtonClick = () => {
        this.apiCall();
    }
    /*
    getRandomRecipe () {
        
        
    }
    */
    handleRandomRecipe = () => {
        const randomRecipe = Math.floor(Math.random() * 10);
        this.setState({ open:true,
             currentRecipe: this.state.randomArray[randomRecipe],
             currentTitle: this.state.randomArray[randomRecipe].recipe.label
             });
    }

    handleClose= () => {
        this.setState({ open: false});
    }

    

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="header">
                    <div className="header-search__form">
                        <TextField 
                        name="searchText" 
                        fullWidth={false}
                        onChange={this.onTextChange}
                        onKeyPress={this.onKeyPress}
                        placeholder={'Search for a recipe'}
                        className={classes.textField}
                        InputProps={{
                            disableUnderline: true
                        }}
                        />
                        <Button variant="contained" color="default" 
                        onClick={this.onButtonClick} 
                        className={classes.button}>
                        
                        <SearchIcon />
                        </Button>
                    </div>
                    <Button variant="contained" color="default" 
                    onClick={this.handleRandomRecipe} 
                    className={classes.button}>
                    Or get a Random Recipe!
                    </Button>
                </div>
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
            </div>
        )
    }
}

//export default Search;
export default withStyles(styles)(Search);