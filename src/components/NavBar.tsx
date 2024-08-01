import { HStack, Image, Heading, Hide} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import AsidePanel from "./AsidePanel"
import SearchInput from "./SearchInput"


interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack paddingX='20px' paddingTop='10px'  alignItems='center' >
      <HStack flexShrink='0' >
        <Image src={logo} boxSize='60px' objectFit='cover' />
        <Hide below='md' >
            <Heading fontSize='xl' display='inline-block' as='h1' color='whitesmoke' >Movie Center</Heading>
        </Hide>
      </HStack>
      <SearchInput onSearch={onSearch} />
      <AsidePanel />
    </HStack>
  )
}

export default NavBar