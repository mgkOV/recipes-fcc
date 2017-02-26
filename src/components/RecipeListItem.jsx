import React from 'react';

export default (props) => {
  return(
    <div className='recipe'>
      <div className="recipeImg" style={ {backgroundImage: 'url(' + props.image_url + ')' } } >
        <div className="shutter">
          <p>View Recipe</p>
        </div>
      </div>
      <h2>{ props.title }</h2>
    </div>
  )
}
