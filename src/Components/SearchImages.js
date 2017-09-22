import React, { Component } from 'react'
import Images from './Images'
import TextField from 'material-ui/TextField';
// // import CircularProgress from 'material-ui/CircularProgress';
// import { Request, Get, withAxios } from 'react-axios'
import axios from 'axios'
import Snackbar from 'material-ui/Snackbar';
import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import FavoritesIconBorder from 'material-ui/svg-icons/action/favorite-border';
import {red500} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';

import ReactHoverObserver from 'react-hover-observer';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    overflowY: 'auto',
    overflowX: 'auto',
    marginTop:50,
    marginBottom: 50
  }
}
class SearchImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchResults: [],
      open: false,
      error: false,
      onClickImage: false,
      favoriteImages: [],
      text : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  handleChange(e){
    var search = e.target.value
    var truncateSearch =search.split(' ').join('+');
    console.log(truncateSearch)
    this.setState({open: true,});
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'pQoWwD0Oh00dkH2Xrd1VOoo0IDKUcY5K',
        q: truncateSearch,
        limit: 8
      }
    })
    .then(  (response) => {
      this.setState({searchResults: response.data.data, loading: false})
    })
    .catch(  (error) =>  {
      this.setState({error: true})
    });
  }


  handleMouseClick =(value,search) => {
    console.log(`${value} clicked`)
    this.setState({onClickImage: true})
    this.state.favoriteImages.push(search)
    console.log(this.state.favoriteImages)
  }

  render() {
    const {text} = this.state;
    return (
      <div className="container">
        <div className="container">
          <div className="container-fluid">

            <TextField style={{ fontSize: '20px' }} hintText="Start searching for images!" fullWidth={true} onChange={this.handleChange} />
          </div>
          <div className="container-fluid">
            { this.state.error ?
              <p className="text-center">Please retype your search again!</p>:
                <div style={styles.root}>
                  <GridList style={styles.gridList} cols={4}  className="grid-list">
                    { this.state.searchResults.map( (search) => (
                      <Card className="card-images">
                        <GridTile className="grid-title"
                          key={search.id} onClick={() =>this.handleMouseClick(search.id, search)}
                          >
                          <CardMedia
                            overlay={<div className="text-right card-media-overlay" overlayContainerStyle ><FavoritesIcon color={red500}/></div>}>
                            <Images test={search.images.fixed_width_downsampled.url} />
                          </CardMedia >
                        </GridTile>}
                      </Card>
                    ))}
                  </GridList>
                </div>
              }
            </div>

          </div>
          <Snackbar
            open={this.state.open}
            message="Gifs Loading"
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
            />
        </div>
      );
    }
  }

  export default SearchImages;
