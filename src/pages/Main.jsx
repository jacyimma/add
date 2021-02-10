import {useState,useEffect} from 'react'
import './Main.css'
import {useHistory,useLocation} from 'react-router-dom'
import Preloader from '../components/Preloader'
import {getAllCategories} from '../api'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'

export default function Main() {
    const [catalog,setCatalog] = useState([]);
    const [filter,setFilter] = useState([]);
    const {pathname,search}=useLocation();
    const {push} = useHistory();
    const handleSearch=(str)=>{
        setFilter(
            catalog.filter(
                item=>item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
        push({
            pathname,
            search: `?search=${str}`,
        })
    }
    useEffect(()=>{
        getAllCategories().then(d=>{
            setCatalog(d.categories);
            setFilter( search ?
                d.categories.filter(
                    item =>
                    item.strCategory.toLowerCase()
                    .includes(
                        search.split('=')[1].toLowerCase()
                    )
                ) : d.categories
            );
        })
    },[search])

    return (
        <>
        <Search cb={handleSearch}/>
        <div>
            {!catalog.length ? <Preloader/> : <CategoryList catalog={filter}/>}
        </div>
        </>
    )
}
