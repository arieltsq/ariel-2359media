import React from 'react';


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
                <img src={props.test} alt={props.type}/>
          </div>
    );

    export default Images;
