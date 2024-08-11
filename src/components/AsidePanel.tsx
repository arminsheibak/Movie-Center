import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Image } from '@chakra-ui/react'
import navicon from '../assets/navicon.webp'

const AsidePanel = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  return (
    <>
    <Image  src={navicon} boxSize='60px' objectFit='cover'  onClick={onOpen} />
    <Drawer placement='right' isOpen={isOpen} onClose={onClose} > 
     <DrawerOverlay />
         <DrawerContent>
           <DrawerHeader borderBottomWidth='1px'>Movies</DrawerHeader>
           <DrawerBody>
           </DrawerBody>
         </DrawerContent>
     </Drawer>
     </>
  )
}

export default AsidePanel