import {useParams,useHistory} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {getFilteredByCategory} from '../api'
import MealList from './MealList'
import Preloader from './Preloader'
import './CatItem.css'
export default function Category(){
    const {name} = useParams()
    const [meals,setMeals] = useState([])
    const {goBack} = useHistory();
    useEffect(()=>{
        getFilteredByCategory(name).then((d)=>setMeals(d.meals))
    },[name]);
    return (
        <>
        <button className="btn-floating waves-effect waves-light goBack" onClick={goBack}>
            <i className="material-icons">chevron_left</i>
        </button>
        <div>
            {!meals.length ? <Preloader/> : <MealList meals = {meals}/>}
        </div>
        </>
    )
}
