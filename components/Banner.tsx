import {Flex, Text} from '@chakra-ui/react'


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
          <h1>hi</h1>
            
        </Flex>
    );
}