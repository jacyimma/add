import Meal from './Meal'
import './CatItem.css'
export default function MealList(props) {
    const {meals}=props;

    return (
        <div className="list container">
            {meals.map(meal=>
            <Meal key={meal.idMeal} {...meal}/>
            )}
        </div>
    )
}
