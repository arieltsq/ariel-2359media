import React, { Component } from 'react'
import Images from './Images'
import TextField from 'material-ui/TextField';
// // import CircularProgress from 'material-ui/CircularProgress';
// import { Request, Get, withAxios } from 'react-axios'
import axios from 'axios'
import Snackbar from 'material-ui/Snackbar';

import {GridList, GridTile} from 'material-ui/GridList';
import {Card} from 'material-ui/Card';


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
      show: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }
  //set the heartshape
  onMouseover (e) {
    this.setState({show:true})
  }
  //clear the heartshape
  onMouseout (e) {
    this.setState({show:false})

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
    axios.get('https://api.giphy.com/v1/gifs/search', {
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


  handleMouseClick =(value) => {
    console.log(`${value} clicked`)
    this.setState({onClickImage: true})
    console.log(this.state.favoriteImages)
    // to compare the id of the images fetched and the images being clicked.
    // const nextState =  this.state.searchResults.map((image) =>{
    //   if(image.id === value){
    //     return console.log("check if", value, "existed")
    //   }else {
    //     return image
    //   }
    // })

  }

  render() {

    return (
      <div className="container">
        <div className="container">
          <div className="container-fluid">

            <TextField className="text-searchbox" hintText="Start searching for images!" fullWidth={true} onChange={this.handleChange} />
          </div>
          <div className="container-fluid">
            { this.state.error ?
              <p className="text-center">Please retype your search again!</p>:
                <div style={styles.root}>
                  <GridList style={styles.gridList} cols={4}  className="grid-list">
                    { this.state.searchResults.map((search) => (
                      <Card className="card-images"       key={'images' + search.id}>
                        <GridTile className="grid-title"
                          onClick={() =>this.handleMouseClick(search.id)} onMouseEnter={this.onMouseover.bind(this)}
                          onMouseLeave={this.onMouseout.bind(this)}
                          >
                          <Images url={search.images.fixed_height_downsampled.url} showIcon={this.state.show}
                            A/>
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
