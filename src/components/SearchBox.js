import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2' style={{ marginTop:'-15px' }}>
      <input
        className='pa3 ba br3 b--green bg-lightest-blue w-50'
        type='search'
        placeholder='Pick your robot'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;