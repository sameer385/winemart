import React, {useRef, useEffect} from 'react'
import {useGlobalContext} from '../Context'

function SearchForm() {
  const {setSearchDrink} = useGlobalContext();
  const searchValue = useRef('')

  useEffect(()=> {
    searchValue.current.focus()
  }, [])

  const loadDrnks = () => {
    setSearchDrink(searchValue.current.value)
  }

  const submitHandler = (e) => {
      e.preventDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail</label>
          <input type='text' id='name' ref={searchValue} onChange={loadDrnks}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm