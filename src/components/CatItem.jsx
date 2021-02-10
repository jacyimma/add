import React from 'react'
import { Link} from 'react-router-dom';
import './CatItem.css'

export default function CatItem(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    }=props;
    return (
        <div className="card">
        <div className="card-image">
          <img className="activator" src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div className="card-content">  
        <span className="card-title activator grey-text text-darken-4"><strong>{strCategory}</strong></span> 
          <p>{strCategoryDescription.slice(0,50)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className="btn waves-effect waves-light light-green lighten-1">Enter</Link>
        
        </div>
      </div>
    )
}
