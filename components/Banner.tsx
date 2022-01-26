import {Flex, Stack, Text} from '@chakra-ui/react'


export function Banner() {
    return(
        <Flex
          align='center'
          bgImg=" url( 'Background.png ' ) "
          w='1440px'
          maxWidth={1440}
          h='335px'
          bgRepeat="no-repeat"
          position="relative"
          flex="1"
        >
          <Stack align='center'>
            <Text
              color='#F5F8FA'
              fontSize='36px'
              direction='column'
              fontFamily='Poppins'
              pl='140px'
              >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              color='#DADADA'
              fontSize='20px'
              direction='column'
              fontFamily='Poppins'
              pl='140px'
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Stack>
            
        </Flex>
    );
}