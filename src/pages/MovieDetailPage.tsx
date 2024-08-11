import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { Box, Heading, Image, Show, Text } from "@chakra-ui/react";
import { FaImdb } from "react-icons/fa";
import VotesAvgBadge from "../components/VotesAvgBadge";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data: movie, error } = useMovie(movieId!);
  const posterUrl = `https://media.themoviedb.org/t/p/w600_and_h900_face${movie?.poster_path}`;
  const backDropUrl = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`;

  if (error) {
    throw new Error();

  }
  return (
    <>
      <Box position="relative" display="flex" alignItems="center" mt="20px">
        <Image
          borderRadius={5}
          src={backDropUrl}
          alt={`${movie?.title} backdrop picture`}
          opacity="0.45"
          zIndex="-1"
          position="absolute"
        />
        <Box ml="3%" display="grid" gridTemplateColumns="1fr 2fr">
          <Image
            borderRadius={10}
            src={posterUrl}
            alt={`${movie?.title} poster`}
            width="80%"
          />
          <Box>
            <Heading fontSize={{ base: 25, md: 30, xl: 40 }}>
              {movie?.title}
            </Heading>
            {movie?.genres.map((g) => (
              <Text
                fontSize={15}
                display="inline-block"
                color="rgba(255, 255, 255, 0.8)"
                mr="7px"
              >
                {g.name}
              </Text>
            ))}
            <Box display='flex'alignItems='flex-end' >
              <Text
                display="inline-block"
                mr={2}
                color="rgba(255, 255, 255, 0.9)"
              >
                {movie?.runtime}m
              </Text>
              <Text
                display="inline-block"
                color="rgba(255, 255, 255, 0.9)"
                fontSize="sm"
                mr={2}
              >
                {movie?.release_date.split("-").join("/")}
              </Text>
              <VotesAvgBadge rate={parseFloat(movie?.vote_average.toFixed(2)!)} />
            </Box>
            <Link
              to={`https://www.imdb.com/title/${movie?.imdb_id}`}
              target='_blank'
            >
              <Box mt={1} position="relative" display="flex" alignItems="center">
                <Box
                  bgColor="black"
                  display="inline-block"
                  position="absolute"
                  top="4px"
                  left="4px"
                  height="24px"
                  width="24px"
                  zIndex="-1"
                ></Box>
                <FaImdb size={32} color="gold" />
                <Text ml={"6px"} color="whitesmoke" display="inline-block">
                  IMDB page
                </Text>
              </Box>
            </Link>
            <Show above="md">
              <Text
                fontSize={{ base: 18, xl: 23 }}
                mt={4}
                textAlign="justify"
                paddingRight={14}
              >
                {movie?.overview}
              </Text>
            </Show>
          </Box>
        </Box>
      </Box>
      <Show below="md">
        <Box marginX={5}>
          <Heading mt={6} mb={2} fontSize={20} as={"h3"}>
            Overview :
          </Heading>
          <Text textAlign="justify">{movie?.overview}</Text>
        </Box>
      </Show>
    </>
  );
};

export default MovieDetailPage;
