import CatItem from './CatItem'
import './CatItem.css'
export default function CategoryList(props) {
    const {catalog=[]} = props
    return (
        <div className="list container">
            {
                catalog.map(element=>(
                    <CatItem key= {element.strCategory} {...element}/>
                ))
            }
        </div>
    )
}
