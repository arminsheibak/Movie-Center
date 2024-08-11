import { Link, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaImdb } from "react-icons/fa";
import VotesAvgBadge from "../components/VotesAvgBadge";
import useCast from "../hooks/useCast";
import defaultProfile from "../assets/default-profile.jpg";
import { useState } from "react";
import useImages from "../hooks/useImages";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data: movie, error } = useMovie(movieId!);
  const [allCast, setAllCast] = useState(false);
  const { data: castData } = useCast(movieId!);
  const { data: images } = useImages(movieId!);
  const posterUrl = `https://media.themoviedb.org/t/p/w600_and_h900_face${movie?.poster_path}`;
  const backDropUrl = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`;
  const cast = allCast ? castData?.cast : castData?.cast.slice(0, 6);

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
            <Box display="flex" alignItems="flex-end">
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
              <VotesAvgBadge
                rate={parseFloat(movie?.vote_average.toFixed(2)!)}
              />
            </Box>
            <Link
              to={`https://www.imdb.com/title/${movie?.imdb_id}`}
              target="_blank"
            >
              <Box
                mt={1}
                position="relative"
                display="flex"
                alignItems="center"
              >
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
      <Box marginX={5} marginTop={10}>
        <Heading mt={6} mb={5} fontSize={20} as={"h3"}>
          Cast :
        </Heading>
        <SimpleGrid columns={{ base: 3, md: 5, xl: 7 }} spacing={3}>
          {cast?.map((actor) => (
            <Card key={actor.name} borderRadius={15} overflow="hidden">
              <Image
                src={
                  actor.profile_path
                    ? `https://media.themoviedb.org/t/p/w276_and_h350_face${actor.profile_path}`
                    : defaultProfile
                }
                objectFit="cover"
              />
              <CardBody>
                <Heading as="h3" fontWeight="600" fontSize={14}>
                  {actor.name}
                </Heading>
                <Text fontSize={13}>{actor.character}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
        <Box mt={4}>
          <Button onClick={() => setAllCast(!allCast)}>
            {allCast ? "Hide" : "Show All the Cast"}
          </Button>
        </Box>
      </Box>
      <Box marginX={5} marginTop={10}>
        <Heading mt={6} mb={5} fontSize={20} as={"h3"}>
          Photo Gallery:{" "}
        </Heading>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {images?.backdrops.slice(0,10).map((image) => {
              return (
                  <Image
                    key={image.file_path}
                    src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${image.file_path}`}
                  />
              );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default MovieDetailPage;
