import React, { Component } from 'react';
import {Image}  from 'react-bootstrap'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
  },
};
const tilesData = [
  {
    img: 'http://sugartin.info/wp-content/uploads/2013/11/logo.png',
    title: 'Breakfast'
  },
  {
    img: 'https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
    title: 'Tasty burger'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBR1fdndGjJVBs1X-jEK95Ug5dfvutlFxwVn1NDgvtmB12desv',
    title: 'Camera',
  },
  {
    img: 'https://lh3.googleusercontent.com/p5kStIWYqFXMhhVKe6TcEb4qvoXnnUlvhKWZjGNK9_U89d1bzkXHslkVrfcJrSMkeVs=w300',
    title: 'Morning',
  },
  {
    img: 'https://www.google.com/fit/static/images/fit-logo-fallback-anim.png',
    title: 'Santa',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOU3PziYf-l6gM1cvbfPKJ0webrLeAUxb792xquG5I-V-stdm',
    title: 'Google Spinner',
  }
]
const Images = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={4}  className="grid-list">
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Images;
