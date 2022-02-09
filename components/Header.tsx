import { Center, Flex, Icon, Link, IconButton } from '@chakra-ui/react'

import Image from 'next/image';

import {AiOutlineLeft} from 'react-icons/ai'

interface HeaderProps{
    homepage?:boolean;
}

export function Header({homepage}: HeaderProps) {
    return(
        <Flex as='header' align='center' w='1440px' mb='4' mt='4'>
            {!homepage && (
                <Link href='/' passHref>
                    <IconButton
                      aria-label='voltar
                      homepage'
                      icon={<Icon
                      as={AiOutlineLeft}
                      />}
                      variant="unstyled"
                      ml='50px'
                    >
                    </IconButton >
                </Link>
            )}
            <Center w='100%'>
                <Image
                src='/header/Logo.png'
                alt='logo' 
                width={184.06}
                height={45.92}/>
            </Center>
        </Flex>
    );
}