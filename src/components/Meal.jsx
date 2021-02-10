import React from 'react'
import {Link} from 'react-router-dom'

export default function Meal(props) {
    const{
        idMeal,
        strMeal,
        strMealThumb
    }=props;
    return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={strMealThumb} alt={strMeal}/>
        </div>
        <div className="card-content">
          <span 
          className="card-title activator grey-text text-darken-4">
              {
                  strMeal.length>=15 ? strMeal.substring(0,15)+'...':strMeal
              }
          <i className="material-icons right">navigate_next</i></span>
          <Link to={`/meal/${idMeal}`}>
            <button className="btn waves-effect waves-light light-green lighten-1">The recipe</button>
        </Link>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{strMeal}<i className="material-icons right">close</i></span>
        </div>
      </div>
    )
}
