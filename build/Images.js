import React from 'react';
import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import {red500} from 'material-ui/styles/colors';
import {CardMedia} from 'material-ui/Card';


const Images = props => (
<div>
          <CardMedia
            overlay={ props.showIcon ? <div className="text-right card-media-overlay" ><FavoritesIcon color={red500}/></div>: ''}>
            <img src={props.url} alt="gifs"/>
          </CardMedia >
</div>
);

export default Images;
