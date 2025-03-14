import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '/searchicon.png';

import './SearchBox.scss';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    if (query.trim() !== '') {
      navigate(`/items?search=${query}`);
    }
  }
  return (
    <form className='search-box' onSubmit={handleSearch}>
      <input
        className='search-box__input'
        type='text'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='Buscar productos, marcas y más...'
      />
      <button className='search-box__button' type='submit'>
        <img src={searchIcon} alt='Buscar' className='search-box__icon' />
      </button>
    </form>
  );
}
