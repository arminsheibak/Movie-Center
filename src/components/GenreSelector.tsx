import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import genres from '../data/genres';
import { BsChevronDown } from "react-icons/bs";
import Genre from '../entities/genres';
import { useState } from 'react';


interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreSelector = ({onSelectGenre}: Props) => {
  const [genreName, setGenreName] = useState('');

  return (
  <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    {genreName ?  genreName : 'Select a Genre'}
  </MenuButton>
  <MenuList>
    {genres.map(genre => <MenuItem key={genre.id} onClick={() => {onSelectGenre(genre); setGenreName(genre.name) }} >{genre.name}</MenuItem>)}
  </MenuList>
</Menu>
  )
}

export default GenreSelector;