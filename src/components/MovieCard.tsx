import Movie from "../entities/movies";
import { Card, CardBody, Image, Heading, HStack, Box, SimpleGrid, VStack, Center, GridItem } from "@chakra-ui/react";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden" direction='row' >
          <SimpleGrid templateColumns='160px 1fr' >
            <Image
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              objectFit="cover"
            />
          <GridItem padding={4} >
            <Heading  fontSize="md">{movie.title}</Heading>
          </GridItem>
          </SimpleGrid>
    </Card>
  );
};

export default MovieCard;
