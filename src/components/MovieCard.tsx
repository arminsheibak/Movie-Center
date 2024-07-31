import Movie from "../entities/movies";
import { Card, Image, Heading, SimpleGrid, GridItem, Tag, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const genres = useGenres(movie)

  return (
    <Card borderRadius={5} overflow="hidden" direction='row'>
          <SimpleGrid templateColumns='140px 1fr' >
            <Image
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              objectFit="cover"
            />
          <GridItem padding={4}>
              <Heading  fontSize="md">{movie.title}</Heading>
              <Text color='#CBD5E0'>Release Date: {movie.release_date.split('-').join('/')}</Text>
              <HStack spacing={1.5} flexWrap='wrap' >{genres.map(g => <Tag key={g.id} >{g.name}</Tag  >)}</HStack>
          </GridItem>
          </SimpleGrid>
    </Card>
  );
};

export default MovieCard;
