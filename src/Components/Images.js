import React from 'react';

// import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import FavoritesIconBorder from 'material-ui/svg-icons/action/favorite-border';
import {red500} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card,  CardMedia} from 'material-ui/Card';


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
const Images = props => (
<div>
          <CardMedia
            overlay={ props.showIcon ? <div className="text-right card-media-overlay" ><FavoritesIconBorder color={red500}/></div>: ''}>
            <img src={props.url} alt="gifs"/>
          </CardMedia >
</div>
);

export default Images;
