import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearchTextStore from "../searchTextStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useSearchTextStore(s => s.setSearchText )
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%", margin: "0 12px" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          navigate('movies')
          setSearchText(searchRef.current.value)
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={10}
          placeholder="search movies..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;