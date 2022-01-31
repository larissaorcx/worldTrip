import {Img, Center, Flex, Icon, Link, IconButton } from '@chakra-ui/react'
import {AiOutlineLeft} from 'react-icons/ai'

interface HeaderProps{
    homepage?:boolean;
}

export function Header({homepage}: HeaderProps) {
    return(
        <Flex as='header' align='center' w='1440px'>
            {!homepage && (
                <Link href='/' passHref>
                    <IconButton
                      aria-label='voltar
                      homepage'
                      icon={<Icon
                      as={AiOutlineLeft}
                      />}
                      variant="unstyled"
                      ml='100px'
                    >
                    </IconButton >
                </Link>
            )}
            <Center p='4' w='100%'>
                <Img
                src='header/Logo.png'
                alt='logo' />
            </Center>
        </Flex>
    );
}