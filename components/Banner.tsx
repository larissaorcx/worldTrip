import {Box, Center, Flex, Img, Stack, Text} from '@chakra-ui/react'


export function Banner() {
    return(
        <Flex
          
          bgImg=" url( 'banner/Background.png ' ) "
          w='1440px'
          maxWidth={1440}
          h='368.21px'
          bgRepeat="no-repeat"
        >
            <Stack mt='80px' ml='140px' w='100%' h='100%'>
              <Text
                color='brand.600'
                fontSize='36px'
                w='426px'
                h='108px'
                lineHeight='54px'
                fontWeight='500'
                >
                5 Continentes,<br/> infinitas possibilidades.
              </Text>
              <Text
                color='brand.500'
                fontSize='20px'
                w='524px'
                h='57px'
                lineHeight='30px'
                fontWeight='400'
              >
                Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
              </Text>
            </Stack>
            <Flex direction='column' w='100%' h='100%'>
              <Center mr='146.8px' mt='86.73px'>
                <Img
                  src='banner/Airplane.png'
                  alt='Avião' 
                  w='417.15px'
                  h='270.74px'
                  />
              </Center>
            </Flex>
            
        </Flex>
    );
}