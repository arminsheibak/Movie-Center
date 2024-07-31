import { HStack, Image, Heading, Hide, Box } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack paddingX='20px'  alignItems='center' >
      <Image src={logo} boxSize='60px' objectFit='cover' />
      <Hide below='sm' >
        <Box paddingBottom='7px'>
          <Heading as='h1' color='whitesmoke' >Movie Center</Heading>
        </Box>
      </Hide>
    </HStack>
  )
}

export default NavBar