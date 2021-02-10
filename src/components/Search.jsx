import {useState} from 'react'

export default function Search({cb=Function.prototype}) {
    const [value,setValue] = useState('');

    const handleKey=(event)=>{
        if(event.key==='Enter'){
            handleSubmit();
        }
    }
    const handleSubmit=()=>{
        cb(value);
    }
    return (
        <div className='row container'>
            <div className='input-field col s12'>
                <input 
                type='search'
                id='search-field'
                placeholder='Search'
                onKeyDown={handleKey}
                onChange={(e)=>{setValue(e.target.value)}}
                value={value}
                />
                <button
                className="btn  blue lighten-3"
                onClick={handleSubmit}
                >Search
                </button>
            </div>
        </div>
    )
}
