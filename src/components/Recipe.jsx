import {useHistory,useParams} from'react-router-dom'
import {getMealById} from '../api'
import {useEffect, useState} from 'react'
import Preloader from './Preloader'
import './Recipe.css'

export default function Recipe() {
    const[recipe, setRecipe] = useState({});
    const {id} = useParams();
    const {goBack} = useHistory();
    useEffect(()=>{
        getMealById(id).then(data=>setRecipe(data.meals[0]))
    },[id])
    return (
        <div>
              <button className="btn-floating waves-effect waves-light goBack" onClick={goBack}>
              <i className="material-icons">chevron_left</i>
              </button>
            {
               !recipe.idMeal ? <Preloader/> 
               : <div className="recipe container">
                    <h2>{recipe.strMeal}</h2>
                   <div className="firstContent"> 
                        <img 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal}
                        className="img"
                        />
                        <h6>
                            <i className="material-icons">opacity</i>
                            <strong> Category: </strong>
                            {recipe.strCategory}
                        </h6>
                        {recipe.strArea ? 
                            <h6> 
                                <i className="material-icons">opacity</i> 
                                <strong> Distributed area: </strong>
                                {recipe.strArea}
                            </h6>
                        :null}
                    </div>
    <table className="table">
        <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>  
            </tr>  
        </thead>
        <tbody>
         { Object.keys(recipe).map((key)=>{
                 if(key.includes('Ingredient') && recipe[key]){
                     return(
                         <tr key={key}>
                             <td>{recipe[key]}</td>
                             <td>
                                 {
                                     recipe[`strMeasure${key.slice(13)}`]
                                 }
                             </td>
                         </tr>
                     )
                 }
                 return null;
             })
         }
        </tbody>
      </table>
                   <div className="p"> <p>{recipe.strInstructions}</p> </div>
                 {
                     recipe.strYoutube
                     ? <iframe 
                     title={id}
                     src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                     allowFullScreen
                      /> 
                     :null
                     }
                   
               </div>
            }
        </div>
    )
}
