import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5} >
        <Heading>Error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 Page Not Found"
            : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
