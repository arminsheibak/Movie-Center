import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar onSearch={searchText => setSearchText(searchText)} />
      </GridItem>
      <GridItem padding={5} area="main">
        <MovieGrid searchText={searchText} />
      </GridItem>
    </Grid>
  );
};

export default App;
