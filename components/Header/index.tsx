import {Img, Center, Flex, Button} from '@chakra-ui/react'
import {AiOutlineLeft} from 'react-icons/ai'

export function Header() {
    return(
        <Flex align='center' justify='center' >
            <Button bg="1">
                <AiOutlineLeft size='xs'/>
            </Button>
            <Center p='6'>
                <Img
                src='Logo.png'
                alt='logo' />
            </Center>
        </Flex>
    );
}