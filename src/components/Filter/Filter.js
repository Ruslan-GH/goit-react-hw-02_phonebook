import React from 'react';
import s from './Filter.module.css'

const Filter = ({onChange, value}) => {
    return(
        <p className={s.Filter}>Find contacts by name
            <input 
               className={s.FilterInput}
               type="text"
               value={value}
               onChange={onChange}
            >
            </input>
        </p>
    )
}

export default Filter;
