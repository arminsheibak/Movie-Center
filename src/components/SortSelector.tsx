import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useMovieQueryStore from "../movieQueryStore";



const SortSelector = () => {
  const setSortOrder = useMovieQueryStore( s => s.setSortOrder);
  const [sortingLabel, setSortingLabel ] = useState('Popularity')
  const sortOrders = [
    {value: '', label: 'Popularity'},
    {value: 'original_title.asc', label: 'Alphabetical'},
    {value: 'primary_release_date.desc', label: 'Release Date'},
    {value: 'vote_average.desc', label: 'Ratings'},
    {value: 'vote_count.desc', label: 'Number of Ratings'},

  ]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort By: {sortingLabel}</MenuButton>
      <MenuList>
        {sortOrders.map(order => <MenuItem key={order.value} onClick={() =>{ setSortOrder(order.value); setSortingLabel(order.label) }}  value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
