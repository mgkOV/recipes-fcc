import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return(
    <Link to={"/recipes/" + props.recipe_id} >
      <div className='recipe'>
        <div className="recipeImg" style={ {backgroundImage: 'url(' + props.image_url + ')' } } >
          <div className="shutter">
            <p>View Recipe</p>
          </div>
        </div>
        <h2>{ props.title }</h2>
      </div>
    </Link>
  );
}
