import { Center, Flex, Img, Stack, Text  } from "@chakra-ui/react";

export function Sidebar(){
    return(
        <Flex w='1160px' h='145px' mt='80.79px'>
            <Stack w='158px' h='145px' mr='130px'>
                <Center>
                    <Img
                        src='Copo.png' 
                        alt='Drink' 
                        w='85px'
                        h='85px'
                        mb='24px'
                    />
                </Center>
                <Text
                  fontSize='24px'
                  fontWeight='600'
                  align='center'
                  lineHeight='36px'
                  w='158px'
                  h='36px'
                  color='brand.300'
                  >
                    vida noturna
                </Text>
            </Stack>
            <Stack w='85px' h='145px' mr='151px'>
                <Center>
                    <Img
                        src='Prancha.png'
                        alt='Prancha' 
                        w='85px'
                        h='85px'
                        mb='24px'
                    />
                </Center> 
                <Text
                  fontSize='24px'
                  fontWeight='600'
                  align='center'
                  lineHeight='36px'
                  color='brand.300'>praia</Text>
            </Stack>
            <Stack w='158px' h='113px' mr='171px'>
                <Center>
                    <Img
                        src='Predio.png'
                        alt='predio' 
                        w='85px'
                        h='85px'
                        mb='24px'
                    />
                </Center>
               <Text
                  fontSize='24px'
                  fontWeight='600'
                  align='center'
                  lineHeight='36px'
                  color='brand.300'>moderno</Text>
            </Stack>
            <Stack w='158px' h='100px' mr='159px'>
                <Center>
                    <Img
                        src='museum.png'
                        alt='museu'  
                        w='85px'
                        h='85px'
                        mb='24px'
                    />
                </Center>
                <Text
                  fontSize='24px'
                  fontWeight='600'
                  align='center'
                  lineHeight='36px'
                  color='brand.300'>clássico</Text>
            </Stack>
            <Stack w='158px' h='101px' >
                <Center>
                    <Img
                        src='terra.png'
                        alt='terra' 
                        w='85px'
                        h='85px'
                        mb='24px'
                    />
                </Center>    
                <Text
                  fontSize='24px'
                  fontWeight='600'
                  align='center'
                  lineHeight='36px'
                  color='brand.300'>e
                  mais...</Text>
            </Stack>
        </Flex>
    );
}