import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import genres from '../data/genres';
import { BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import useMovieQueryStore from '../movieQueryStore';


const GenreSelector = () => {
  const setGenre = useMovieQueryStore(s => s.setGenreId);
  const [genreName, setGenreName] = useState('');

  return (
  <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {genreName ?  genreName : 'Select a Genre'}
  </MenuButton>
  <MenuList>
    {genres.map(genre => <MenuItem key={genre.id} onClick={() => {setGenre(genre.id); setGenreName(genre.name) }} >{genre.name}</MenuItem>)}
  </MenuList>
</Menu>
  )
}

export default GenreSelector;