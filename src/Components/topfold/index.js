import React, { useState } from 'react'
import './topfold.css'
const Topfold = () => {

    const [query,setQuery]=useState('');
    const handleQuery=(e)=>{
        setQuery(e.target.value);
    }

  return (
    <div className='topfold'>
        {window.location.pathname ==='/'?(<div className='home-topfold'>
            <div className='search-bar'>
                <i class="fi fi-rr-search"></i>
                <input 
                    placeholder='Search for Expenses' value='' 
                    onChange={(e)=>handleQuery(e)}
                />
            </div>
            <div className='add-button'>
                <i class="fi fi-rr-add"></i>
                <label>Add</label>
            </div>
        </div>):(
        <div className='add-topfold'>
            <div className='add-topfold-button'>
                <i class="fi fi-rr-angle-left"></i>
                <label>Back</label>
            </div>
            <div className='add-topfold-button'>
            <i class="fi fi-rr-cross-circle"></i>
                <label>Cancel</label>
            </div>
        </div>

        )}
    </div>
  )
}

export default Topfold