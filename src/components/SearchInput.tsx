import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%", margin: "0 12px" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value)
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