import React from 'react';

// Define the type for props
interface SearchBoxProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type='text'
      className='form-control'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder='Search...'
    />
  );
};

export default SearchBox;


