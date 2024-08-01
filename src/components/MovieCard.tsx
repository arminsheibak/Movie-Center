import Movie from "../entities/movies";
import { Card, Image, Heading, SimpleGrid, Tag, HStack, Text, Flex, Box, Icon } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { MdNoAdultContent } from "react-icons/md";
import VotesAvgBadge from "./VotesAvgBadge";
import defaultImage from '../assets/default.jpg'


interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const genres = useGenres(movie)
  const imageUrl = `https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`

  return (
    <Card borderRadius={5} overflow="hidden" direction='row'>
          <SimpleGrid templateColumns='100px 1fr'>
              <Image
                src={movie.poster_path ? imageUrl : defaultImage}
                objectFit="cover"
              />
          <Flex direction='column' justifyContent='space-between'  paddingX={3} paddingY={2}>
              <Box>
                <Heading paddingLeft={1} marginTop={1}  fontSize="xl">{movie.title}</Heading>
              <HStack marginTop='3.5px' marginLeft='2.5px'  >
                <Icon color={!movie.adult ? 'green.300' : 'red'} boxSize={6} as={MdNoAdultContent}  />
                <VotesAvgBadge rate={parseFloat(movie.vote_average.toFixed(2))} />
              </HStack>
              </Box>
              <Box>
                <Text color='#CBD5E0' fontSize='sm' paddingLeft='1' marginBottom='4px' >Release Date: {movie.release_date.split('-').join('/')}</Text>
                <HStack spacing={1.5} flexWrap='wrap' >{genres.map(g => <Tag colorScheme='black' color='whitesmoke' size='sm'  key={g.id} >{g.name}</Tag  >)}</HStack>
              </Box>
          </Flex>
          </SimpleGrid>
    </Card>
  );
};

export default MovieCard;
