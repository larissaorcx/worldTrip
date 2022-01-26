import {Img, Center, Flex, Icon, Link, IconButton, Box, } from '@chakra-ui/react'
import {AiOutlineLeft} from 'react-icons/ai'

interface HeaderProps{
    homepage?:boolean;
}

export function Header({homepage}: HeaderProps) {
    return(
        <>
        <Flex as='header' align='center' w='1440px'>
            {!homepage && (
                <Link href='/' passHref>
                    <IconButton
                      aria-label='voltar
                      homepage'
                      icon={<Icon
                      as={AiOutlineLeft}
                      />}
                    //   bg='6'
                      variant="unstyled"
                    //   _hover={{bgColor: '6'}}
                      ml='100px'
                    >
                    </IconButton >
                </Link>
            )}
            <Box p='4' ml='auto' mr='auto' >
                <Img
                src='Logo.png'
                alt='logo' />
            </Box>
        </Flex>
        </>
    );
}