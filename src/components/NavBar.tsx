import { HStack, Image, Heading, Hide} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import AsidePanel from "./AsidePanel"

const NavBar = () => {
  return (
    <HStack paddingX='20px' paddingTop='10px' justifyContent='space-between'  alignItems='center' >
      <HStack>
        <Image src={logo} boxSize='60px' objectFit='cover' />
        <Hide below='md' >
            <Heading display='inline-block' as='h1' color='whitesmoke' paddingBottom='7px' >Movie Center</Heading>
        </Hide>
      </HStack>
      <AsidePanel />
    </HStack>
  )
}

export default NavBar